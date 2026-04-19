import { features } from "@/data/features";
import FeatureCard from "@/components/ui/FeatureCard";

export default function CoreFeatures() {
  const coreFeatures = features.filter((f) => !f.comingSoon);

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="section-label bg-brand-gold/10 text-brand-gold-dark mx-auto">
            Core Features
          </div>
          <h2 className="text-text-primary">Everything Your Pet Needs</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            From instant QR recovery to organized travel documents — Idenpet
            gives you the tools to keep your pet safe, identified, and
            travel-ready.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
