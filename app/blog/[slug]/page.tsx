import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { buildArticleMetadata } from "@/lib/seo";
import { findBySlug } from "@/utils/slugs";
import CTABanner from "@/components/ui/CTABanner";
import ArticleCard from "@/components/ui/ArticleCard";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = findBySlug(blogPosts, params.slug);
  if (!post) return {};
  return buildArticleMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    publishedTime: post.date,
    author: post.author,
    ogImage: post.image,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = findBySlug(blogPosts, params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
          <div className="container-page max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-green mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="badge-green mb-4">{post.category}</span>
            <h1 className="text-text-primary mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <time>
                {new Date(post.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-page max-w-3xl prose-content">
            {post.content.split("\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## "))
                return <h2 key={index}>{trimmed.replace("## ", "")}</h2>;
              if (trimmed.startsWith("### "))
                return <h3 key={index}>{trimmed.replace("### ", "")}</h3>;
              if (trimmed.startsWith("- "))
                return (
                  <ul key={index}>
                    <li>{trimmed.replace("- ", "")}</li>
                  </ul>
                );
              if (/^\d+\.\s/.test(trimmed))
                return (
                  <ol key={index}>
                    <li>{trimmed.replace(/^\d+\.\s/, "")}</li>
                  </ol>
                );
              return <p key={index}>{trimmed}</p>;
            })}
          </div>
        </section>
      </article>

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-brand-cream">
          <div className="container-page">
            <h2 className="text-text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <ArticleCard
                  key={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  date={p.date}
                  readTime={p.readTime}
                  category={p.category}
                  href={`/blog/${p.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Keep Your Pet Safe with Idenpet"
        description="Create a digital pet passport and generate a QR recovery profile — free to start."
        primaryCta={{ label: "Get Your Free QR Tag", href: "/waitlist" }}
      />
    </>
  );
}
