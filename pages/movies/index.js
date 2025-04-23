import { useState } from "react";
import { getAllMovies, getAllGenres } from "@/lib/movieFunctions";
import Layout from "@/components/layout";
import MovieCard from "@/components/movieCard";

export default function Movies({ movies, genres }) {
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genreId === selectedGenre)
    : movies;

  return (
    <Layout title="All Movies">
      <div className="mb-6">
        <label className="mr-2 font-medium">Filter by Genre:</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <p className="text-gray-600 my-8 text-center">
          No movies found for the selected genre.
        </p>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const movies =await getAllMovies();
  const genres =await getAllGenres();
  if(!movies || !genres){
    return{
        notFound:true,
    }
  }
  return {
    props: {
      movies,
      genres,
    },
    revalidate: 86400,
  };
}
