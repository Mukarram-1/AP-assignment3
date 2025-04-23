import Layout from "@/components/layout";
import Link from "next/link";

export default function HelpPage({ slug }) {
  const renderHelpContent = () => {
    if (!slug || slug.length === 0) {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Help Center</h2>
          <p className="mb-6">
            Welcome to the Movie House Help Center. How can we assist you today?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/help/faqs"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">FAQs</h3>
              <p className="text-gray-600">
                Find answers to commonly asked questions.
              </p>
            </Link>

            <Link
              href="/help/contact"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Get in touch with our support team.
              </p>
            </Link>

            <Link
              href="/help/privacy"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
              <p className="text-gray-600">
                Learn about our privacy practices.
              </p>
            </Link>
          </div>
        </div>
      );
    }

    if (slug[0] === "faqs") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">
                How accurate is the movie information?
              </h3>
              <p>
                Our movie data is regularly updated and verified for accuracy.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">
                Can I contribute to the movie database?
              </h3>
              <p>
                Currently, we don&apos;t accept public contributions, but we plan to
                add this feature in the future.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">
                How often is new content added?
              </h3>
              <p>We update our database with new movies weekly.</p>
            </div>
          </div>
        </div>
      );
    }

    if (slug[0] === "contact") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6">
            Have questions or feedback? We&apos;d love to hear from you!
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p>support@moviehouse.example.com</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Office Hours</h3>
              <p>Monday - Friday: 9am - 5pm EST</p>
            </div>
          </div>
        </div>
      );
    }

    if (slug[0] === "privacy") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              At Movie House, we take your privacy seriously. This policy
              outlines how we collect and use your data.
            </p>

            <h3 className="text-lg font-medium mb-2">Information We Collect</h3>
            <p className="mb-4">
              We collect basic usage information to improve our service and user
              experience.
            </p>

            <h3 className="text-lg font-medium mb-2">
              How We Use Your Information
            </h3>
            <p>
              We only use your information to provide and improve our services.
              We never sell your data to third parties.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Help Topic Not Found</h2>
        <p className="mb-6">
          Sorry, we couldn&apos;t find the help topic you&apos;re looking for.
        </p>
        <Link href="/help" className="text-blue-600 hover:underline">
          Return to Help Center
        </Link>
      </div>
    );
  };

  return (
    <Layout title="Help Center">
      <div className="mb-6">
        <Link href="/help" className="text-blue-600 hover:underline">
          Help Home
        </Link>
        {slug && slug.length > 0 && (
          <>
            <span className="mx-2">/</span>
            <span className="capitalize">{slug[0]}</span>
          </>
        )}
      </div>

      {renderHelpContent()}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: [] } },
    { params: { slug: ["faqs"] } },
    { params: { slug: ["contact"] } },
    { params: { slug: ["privacy"] } },
  ];

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || [];

  return {
    props: {
      slug,
    },
    revalidate: 3600,
  };
}
