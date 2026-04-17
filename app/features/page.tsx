import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { features } from "@/data/features";
import FeatureCard from "@/components/ui/FeatureCard";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description:
    "Explore Idenpet's features: instant QR recovery, digital pet passport, secure document locker, travel readiness, reminders, lost pet mode, and more.",
  path: "/features",
});

export default function FeaturesPage() {
  const coreFeatures = features.filter((f) => !f.comingSoon);
  const upcomingFeatures = features.filter((f) => f.comingSoon);

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
        <div className="container-page max-w-4xl text-center">
          <h1 className="text-text-primary mb-4">
            Everything Your Pet Needs, in One Platform
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From instant QR recovery to organized travel documents — Idenpet
            gives you the tools to keep your pet safe, identified, and ready
            for anything.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <h2 className="text-text-primary mb-8 text-center">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature) => (
              <div key={feature.id} id={feature.id.replace(/\s/g, "-")}>
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {upcomingFeatures.length > 0 && (
        <section className="section-padding bg-brand-cream">
          <div className="container-page">
            <h2 className="text-text-primary mb-3 text-center">Coming Soon</h2>
            <p className="text-text-secondary text-center mb-8 max-w-lg mx-auto">
              We&apos;re building more tools to help you keep your pet safe.
              Join the waitlist to be the first to know.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {upcomingFeatures.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Start Protecting Your Pet Today"
        description="Create a free digital pet passport and generate your QR recovery profile in minutes."
        primaryCta={{ label: "Get Your Free QR Tag", href: "/waitlist" }}
        secondaryCta={{ label: "See How It Works", href: "/#how-it-works" }}
      />
    </>
  );
}
