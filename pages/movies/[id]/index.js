import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function MovieDetail({ movie, director, genre }) {
  if (!movie) return null;
  return (
    <Layout>
      <div className="mb-6">
        <Link
          href="/movies"
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Movies
        </Link>
      </div>

      <div className="bg-card rounded-xl overflow-hidden shadow-xl">
        <div className="relative h-64 md:h-96 w-full bg-gradient-to-r from-indigo-900 to-purple-900">
          <Image
            src={movie.imageUrl || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {movie.title}
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3 text-card-foreground">
                  Overview
                </h2>
                <p className="text-card-foreground/80 leading-relaxed">
                  {movie.description}
                </p>
              </div>

              {director && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-3 text-card-foreground">
                    Director
                  </h2>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={director.imageUrl}
                          alt={director.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{director.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {director.biography}
                        </p>
                        <Link
                          href={`/movies/${movie.id}/director`}
                          className="text-primary hover:underline text-sm mt-2 inline-block"
                        >
                          View Director Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-bold text-lg mb-3">Movie Details</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Release Year</span>
                    <span className="font-medium">{movie.releaseYear}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">{movie.rating}/10</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Genre</span>
                    <span className="font-medium">
                      {genre?.name || "Unknown"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Director</span>
                    <span className="font-medium">
                      {director?.name || "Unknown"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const movies =await fetch('http://localhost:3000/api/movies').then(res=>res.json());
  if (!movies) {
    return {
      notFound: true,
    };
  }
  const paths = movies.map((m) => ({
    params: { id: m.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const movieId = context.params.id;
  const movie = await fetch(`http://localhost:3000/api/movies/${movieId}`).then(res=>res.json());

  if (!movie) {
    return {
      notFound: true,
    };
  }

  const director = await fetch(`http://localhost:3000/api/directors/${movie.directorId}`).then(res=>res.json());
  const genre = await fetch(`http://localhost:3000/api/genres/${movie.genreId}`).then(res=>res.json());
  return {
    props: {
      movie,
      director,
      genre
    },
  };
}
