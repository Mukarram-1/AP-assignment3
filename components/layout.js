import Header from "./header";
import Footer from "./footer";
function Layout({ children}) {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600">
      <Header />
      <main className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;