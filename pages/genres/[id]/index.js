import Layout from "@/components/layout";
import MovieCard from "@/components/movieCard";
import { getGenreById, getMoviesByGenre } from "@/lib/movieFunctions";

export default function GenreDetails({ genre, movies }) {
  if (!genre) {
    return <div>Genre not found</div>;
  }

  return (
    <Layout>
      <div className="mb-6">
        <p className="text-lg text-gray-700">
          Showing {movies.length} movies in the {genre.name} genre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {movies.length === 0 && (
        <p className="text-gray-600 my-8 text-center">
          No movies found in this genre.
        </p>
      )}
    </Layout>
  );
}
export async function getServerSideProps(context){
    const genre = await getGenreById(context.params.id);
    if (!genre) {
      return {
        notFound: true,
      };
    }
    const movies = await getMoviesByGenre(context.params.id);
    return{
        props:{
            genre,
            movies
        }
    }
}