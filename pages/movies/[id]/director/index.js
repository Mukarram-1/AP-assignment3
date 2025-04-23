import Link from "next/link";
import Layout from "@/components/layout";
import {
  getMovieById,
  getDirectorById,
  getMoviesByDirector,
} from "@/lib/movieFunctions";

export default function MovieDirector({ movie, director, directorMovies }) {
  if (!movie || !director) {
    return <div>Movie or director not found</div>;
  }

  return (
    <Layout title={`Director: ${director.name}`}>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{director.name}</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Biography</h3>
          <p className="text-gray-700">{director.biography}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Movies Directed</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {directorMovies.map((dirMovie) => (
              <li key={dirMovie.id} className="border-l-4 border-blue-500 pl-3">
                <Link
                  href={`/movies/${dirMovie.id}`}
                  className={`hover:underline ${
                    dirMovie.id === movie.id ? "font-bold" : ""
                  }`}
                >
                  {dirMovie.title} ({dirMovie.releaseYear})
                </Link>
                {dirMovie.id === movie.id && (
                  <span className="ml-2 text-sm text-gray-500">(Current)</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-6 border-t">
          <Link
            href={`/movies/${movie.id}`}
            className="text-blue-600 hover:underline"
          >
            ← Back to {movie.title}
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const movie =await getMovieById(context.params.id);
  if (!movie) {
    return {
      notFound: true,
    };
  }

  const director =await getDirectorById(movie.directorId);

  if (!director) {
    return {
      notFound: true,
    };
  }

  const directorMovies =await getMoviesByDirector(director.id);

  return {
    props: {
      movie,
      director,
      directorMovies,
    },
    revalidate: 86400,
  };
}
