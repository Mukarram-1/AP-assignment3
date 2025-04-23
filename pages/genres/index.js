import GenreCard from "@/components/genreCard";
import Layout from "@/components/layout";
import { getAllGenres } from "@/lib/movieFunctions";
export default function Genres({genres}){
    return (
        <Layout>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genres.map((genre) => (
              <GenreCard key={genre.id} genre={genre} />
            ))}
          </div>
        </Layout>
    );
}
export async function getServerSideProps() {
  const genres = await getAllGenres();
if(!genres){
    return{
        notFound:true,
    }
}
  return {
    props: {
      genres,
    },
  };
}