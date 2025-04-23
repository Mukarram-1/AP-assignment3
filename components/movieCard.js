import Link from "next/link";
import Image from "next/image";
import { getGenreById, getDirectorById } from "../lib/movieFunctions";
import { Star, Clock, User } from "lucide-react";
export default function MovieCard({ movie }) {
  const genre = getGenreById(movie.genreId);
  const director = getDirectorById(movie.directorId);
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg card-hover">
      <div className="relative h-48">
        <Image
          src={movie.imageUrl || "/placeholder.svg"}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-2 right-2 bg-yellow-500 text-black font-bold px-2 py-1 rounded-md text-sm flex items-center">
          <Star className="h-4 w-4 mr-1" />
          {movie.rating}/10
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-1 text-card-foreground">
          {movie.title}
        </h2>

        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>{movie.releaseYear}</span>
          <span className="mx-2">•</span>
          <span>{genre?.name || "Unknown Genre"}</span>
        </div>

        <p className="text-card-foreground/80 mb-3 line-clamp-2 text-sm">
          {movie.description}
        </p>

        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <User className="h-4 w-4 mr-1" />
          <span>{director?.name || "Unknown Director"}</span>
        </div>

        <Link
          href={`/movies/${movie.id}`}
          className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
