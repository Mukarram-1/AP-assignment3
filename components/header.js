import Link from "next/link";
import { useRouter } from "next/router";
import { Film, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useTheme();
  
  const isActive = (path) => {
    return router.pathname === path || router.pathname.startsWith(path + "/");
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-lg dark:from-gray-800 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8" />
            <span className="text-2xl font-bold">Movie Flix</span>
          </Link>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`hover:text-white/80 transition-colors ${
                  isActive("/") ? "font-bold border-b-2 border-white pb-1" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/movies"
                className={`hover:text-white/80 transition-colors ${
                  isActive("/movies")
                    ? "font-bold border-b-2 border-white pb-1"
                    : ""
                }`}
              >
                Movies
              </Link>
              <Link
                href="/genres"
                className={`hover:text-white/80 transition-colors ${
                  isActive("/genres")
                    ? "font-bold border-b-2 border-white pb-1"
                    : ""
                }`}
              >
                Genres
              </Link>
              <Link
                href="/directors"
                className={`hover:text-white/80 transition-colors ${
                  isActive("/directors")
                    ? "font-bold border-b-2 border-white pb-1"
                    : ""
                }`}
              >
                Directors
              </Link>
              <Link
                href="/help"
                className={`hover:text-white/80 transition-colors ${
                  isActive("/help")
                    ? "font-bold border-b-2 border-white pb-1"
                    : ""
                }`}
              >
                Help
              </Link>
            </nav>
            
            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
