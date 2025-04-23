import Link from "next/link";
import Layout from "@/components/layout";

export default function Custom404() {
  return (
    <Layout>
      <div className="text-center py-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
}
