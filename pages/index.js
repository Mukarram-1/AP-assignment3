import { useRouter } from "next/router";
import Layout from "../components/layout";
import MovieCard from "../components/movieCard";
import {
  getTrendingMovies,
  getAllGenres,
} from "@/lib/movieFunctions";
import { Star, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home({ trendingMovies }) {
  const router = useRouter();

  const handleBrowseGenres = () => {
    router.push("/genres");
  };

  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16 md:py-24 mb-12 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Movie+Background')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Movie Flix
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Your ultimate destination for discovering movies, exploring
              genres, and learning about directors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBrowseGenres}
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Browse Genres
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <Star className="h-6 w-6 mr-2 text-yellow-500" />
            Trending Movies
          </h2>
          <Link
            href="/movies"
            className="text-primary hover:underline flex items-center text-sm font-medium"
          >
            View all movies
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingMovies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const trendingMovies = await getTrendingMovies();
  const genres = await getAllGenres();

  if (!trendingMovies || !genres) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      trendingMovies,
    },
    revalidate: 86400,
  };
}
