import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Star, Clock, User } from "lucide-react";

export default function MovieCard({ movie, genreName, directorName }) {
  const { darkMode } = useTheme();
  
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg card-hover dark:bg-gray-800 dark:text-gray-100">
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
        <h2 className="text-xl font-bold mb-1 text-card-foreground dark:text-white">
          {movie.title}
        </h2>

        <div className="flex items-center text-muted-foreground text-sm mb-3 dark:text-gray-400">
          <Clock className="h-4 w-4 mr-1" />
          <span>{movie.releaseYear}</span>
          <span className="mx-2">•</span>
          <span>{genreName || "Unknown Genre"}</span>
        </div>

        <p className="text-card-foreground/80 mb-3 line-clamp-2 text-sm dark:text-gray-300">
          {movie.description}
        </p>

        <div className="flex items-center text-muted-foreground text-sm mb-3 dark:text-gray-400">
          <User className="h-4 w-4 mr-1" />
          <span>{directorName || "Unknown Director"}</span>
        </div>

        <Link
          href={`/movies/${movie.id}`}
          className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
