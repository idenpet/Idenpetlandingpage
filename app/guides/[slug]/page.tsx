import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, BookOpen } from "lucide-react";
import { guides } from "@/data/guides";
import { buildArticleMetadata } from "@/lib/seo";
import { findBySlug } from "@/utils/slugs";
import CTABanner from "@/components/ui/CTABanner";
import ArticleCard from "@/components/ui/ArticleCard";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = findBySlug(guides, params.slug);
  if (!guide) return {};
  return buildArticleMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
    publishedTime: guide.date,
    author: guide.author,
    ogImage: guide.image,
  });
}

export default function GuideDetailPage({ params }: Props) {
  const guide = findBySlug(guides, params.slug);
  if (!guide) notFound();

  const relatedGuides = guides
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 2);

  return (
    <>
      <article>
        <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
          <div className="container-page max-w-3xl">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-green mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Guides
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-brand-green" />
              <span className="badge-green">{guide.category}</span>
            </div>
            <h1 className="text-text-primary mb-4">{guide.title}</h1>
            <p className="text-lg text-text-secondary mb-6">{guide.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {guide.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {guide.readTime}
              </span>
              <time>
                {new Date(guide.date).toLocaleDateString("en-CA", {
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
            {guide.content.split("\n").map((paragraph, index) => {
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

      {relatedGuides.length > 0 && (
        <section className="section-padding bg-brand-cream">
          <div className="container-page">
            <h2 className="text-text-primary mb-8">More Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGuides.map((g) => (
                <ArticleCard
                  key={g.slug}
                  title={g.title}
                  excerpt={g.excerpt}
                  date={g.date}
                  readTime={g.readTime}
                  category={g.category}
                  href={`/guides/${g.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Keep Your Pet Safe with Idenpet"
        description="Create a digital pet passport and QR recovery profile — free to start."
        primaryCta={{ label: "Join the Waitlist", href: "/waitlist" }}
        secondaryCta={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}
