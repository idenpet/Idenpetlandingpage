import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { guides } from "@/data/guides";
import ArticleCard from "@/components/ui/ArticleCard";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Pet Safety & Travel Guides",
  description:
    "In-depth guides on digital pet passports, pet travel preparation, lost pet prevention, and smart pet ownership for Canadian pet parents.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
        <div className="container-page max-w-4xl text-center">
          <h1 className="text-text-primary mb-4">Guides</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive guides to help you keep your pet safe, organized,
            and travel-ready.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <ArticleCard
                key={guide.slug}
                title={guide.title}
                excerpt={guide.excerpt}
                date={guide.date}
                readTime={guide.readTime}
                category={guide.category}
                href={`/guides/${guide.slug}`}
                image={guide.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Pet?"
        description="Create a free digital pet passport and QR recovery profile with Idenpet."
        primaryCta={{ label: "Join the Waitlist", href: "/waitlist" }}
        secondaryCta={{ label: "Explore Features", href: "/features" }}
        variant="cream"
      />
    </>
  );
}
