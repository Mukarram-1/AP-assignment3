import Link from "next/link";
import { Film, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const genreColors = {
  "Science Fiction": "from-blue-500 to-purple-600",
  Adventure: "from-green-500 to-teal-600",
  Drama: "from-orange-500 to-red-600",
  Thriller: "from-gray-700 to-gray-900",
};

const darkModeGenreColors = {
  "Science Fiction": "from-blue-800 to-purple-900",
  Adventure: "from-green-800 to-teal-900",
  Drama: "from-orange-800 to-red-900",
  Thriller: "from-gray-800 to-black",
};

export default function GenreCard({ genre }) {
  const genreMovies = genre.movies || [];
  const { darkMode } = useTheme();
  
  const gradientColor = darkMode 
    ? (darkModeGenreColors[genre.name] || "from-indigo-800 to-purple-900")
    : (genreColors[genre.name] || "from-indigo-500 to-purple-600");

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg card-hover bg-gradient-to-br ${gradientColor} text-white`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{genre.name}</h2>

        <div className="flex items-center mb-4">
          <Film className="h-5 w-5 mr-2" />
          <span className="font-medium">{genreMovies.length} movies</span>
        </div>

        {genreMovies.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 opacity-90">
              Popular Titles:
            </h3>
            <ul className="space-y-1">
              {genreMovies.slice(0, 2).map((movie) => (
                <li key={movie.id} className="text-sm opacity-90">
                  {movie.title} ({movie.releaseYear})
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={`/genres/${genre.id}`}
          className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mt-2"
        >
          Browse Movies
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
