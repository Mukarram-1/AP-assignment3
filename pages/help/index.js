import Layout from "@/components/layout";
import Link from "next/link";
import {
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Help() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-muted rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">
                How do I find movies by genre?
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                You can browse movies by genre by visiting the Genres page and
                selecting a specific genre.
              </p>
              <Link
                href="/genres"
                className="text-primary text-sm hover:underline"
              >
                Browse Genres
              </Link>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">
                Where can I see movie details?
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Click on any movie card to view detailed information including
                plot, director, and rating.
              </p>
              <Link
                href="/movies"
                className="text-primary text-sm hover:underline"
              >
                Browse Movies
              </Link>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">
                How do I find a specific director?
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Visit the Directors page to browse all directors or click on a
                director&apos;s name from any movie page.
              </p>
              <Link
                href="/directors"
                className="text-primary text-sm hover:underline"
              >
                View Directors
              </Link>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">What are trending movies?</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Trending movies are the highest-rated films currently featured
                on our platform.
              </p>
              <Link href="/" className="text-primary text-sm hover:underline">
                See Trending
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/help/faqs"
            className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow card-hover flex flex-col"
          >
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full w-fit mb-4">
              <HelpCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-card-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-4 flex-grow">
              Find answers to the most common questions about our platform.
            </p>
            <div className="flex items-center text-primary mt-2">
              <span className="font-medium">View FAQs</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>

          <Link
            href="/help/contact"
            className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow card-hover flex flex-col"
          >
            <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full w-fit mb-4">
              <MessageSquare className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-card-foreground">
              Contact Support
            </h2>
            <p className="text-muted-foreground mb-4 flex-grow">
              Get in touch with our support team for personalized assistance.
            </p>
            <div className="flex items-center text-primary mt-2">
              <span className="font-medium">Contact Us</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>

          <Link
            href="/help/privacy"
            className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow card-hover flex flex-col"
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit mb-4">
              <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-card-foreground">
              Privacy Policy
            </h2>
            <p className="text-muted-foreground mb-4 flex-grow">
              Learn about how we protect your data and privacy.
            </p>
            <div className="flex items-center text-primary mt-2">
              <span className="font-medium">Read Policy</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
