import { MapPin, PawPrint, Lock, Zap } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    emoji: "🇨🇦",
    title: "Designed for Canadian Pet Parents",
    description: "Provincial context, Canadian travel rules, and local relevance built in from day one.",
  },
  {
    icon: PawPrint,
    emoji: "🐾",
    title: "Travel & Documentation Ready",
    description: "Organize rabies certs, health records, and travel documents — all in one secure place.",
  },
  {
    icon: Lock,
    emoji: "🔒",
    title: "Secure Pet Identity & Records",
    description: "Encrypted document storage, private by default. Your pet's data stays yours.",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Instant QR Recovery Anywhere",
    description: "Anyone with a smartphone can scan your pet's tag — no app download needed.",
  },
];

export default function TrustBadges() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="section-label bg-brand-green/10 text-brand-green mx-auto">
            <span className="text-base" role="img" aria-label="Canada">🇨🇦</span>
            Proudly Built for Canada
          </div>
          <h2 className="text-text-primary">Why Canadian Pet Parents Choose Idenpet</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card-premium p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/15 transition-colors">
                <item.icon className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-base font-body font-bold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
