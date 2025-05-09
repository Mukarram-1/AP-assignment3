import Header from "./header";
import Footer from "./footer";
import { useTheme } from "@/context/ThemeContext";

function Layout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-600'}`}>
      <Header />
      <main className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;