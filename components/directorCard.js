import Link from "next/link";
import Image from "next/image";
import { Film } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function DirectorCard({ director }) {
  const directorMovies = director.movies || [];
  const { darkMode } = useTheme();
  
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg card-hover dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 h-48 md:h-auto">
          <Image
            src={director.imageUrl}
            alt={director.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 md:w-2/3">
          <h2 className="text-xl font-bold mb-2 text-card-foreground dark:text-white">
            {director.name}
          </h2>
          <p className="text-card-foreground/80 mb-3 line-clamp-3 text-sm dark:text-gray-300">
            {director.biography}
          </p>

          <div className="flex items-center text-muted-foreground mb-3 dark:text-gray-400">
            <Film className="h-4 w-4 mr-1" />
            <span>Directed {directorMovies.length} movies</span>
          </div>

          <div className="mt-2">
            <h3 className="font-medium mb-1 text-sm dark:text-gray-300">Notable Movies:</h3>
            <ul className="space-y-1">
              {directorMovies.slice(0, 3).map((movie) => (
                <li key={movie.id} className="text-sm">
                  <Link
                    href={`/movies/${movie.id}`}
                    className="text-primary hover:underline dark:text-blue-400"
                  >
                    {movie.title} ({movie.releaseYear})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
