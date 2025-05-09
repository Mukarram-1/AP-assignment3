import useSWR from "swr";
import Layout from "@/components/layout";
import DirectorCard from "@/components/directorCard";
const fetcher = async () => {
  return await fetch('http://localhost:3000/api/directors').then(res=>res.json());
};

export default function Directors() {
  const { data, error, isLoading } = useSWR("directors", fetcher);
  return (
    <Layout>
      {isLoading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading directors...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-600">Failed to load directors</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data &&
          data.map((director) => (
            <DirectorCard key={director.id} director={director} />
          ))}
      </div>
    </Layout>
  );
}
