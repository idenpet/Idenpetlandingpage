import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog-posts";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterCapture from "@/components/ui/NewsletterCapture";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Articles on pet safety, QR pet tags, digital pet passports, travel documents, and smart pet ownership tips for Canadian pet parents.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
        <div className="container-page max-w-4xl text-center">
          <h1 className="text-text-primary mb-4">Idenpet Blog</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tips, guides, and insights on pet safety, QR technology, digital
            pet records, and travelling with your pet in Canada.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <ArticleCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                href={`/blog/${post.slug}`}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream-dark">
        <div className="container-page max-w-xl text-center">
          <h2 className="text-text-primary mb-3">Stay Updated</h2>
          <p className="text-text-secondary mb-6">
            Get the latest pet safety tips and Idenpet updates delivered to your
            inbox.
          </p>
          <NewsletterCapture />
        </div>
      </section>
    </>
  );
}
