import { Heart, MapPin, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    text: "Every feature is designed to protect your pet and give you peace of mind.",
  },
  {
    icon: Heart,
    title: "Pet-First Design",
    text: "Built by pet owners, for pet owners — focused on what actually matters.",
  },
  {
    icon: MapPin,
    title: "Canadian Context",
    text: "Provincial requirements, Canadian travel rules, and local relevance built in.",
  },
];

export default function CanadianMission() {
  return (
    <section className="section-padding bg-brand-green text-white relative overflow-hidden">
      <div className="container-page relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6">
            <span className="text-base" role="img" aria-label="Canada">🇨🇦</span>
            100% Canadian
          </div>
          <h2 className="text-white mb-6">
            Built for Canadian Pet Parents, Coast to Coast
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Idenpet was created with one mission: make pet ownership safer,
            smarter, and more organized for every Canadian family. From Halifax
            to Vancouver, we&apos;re building the tools Canadian pet parents
            deserve.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((item) => (
              <div key={item.title} className="text-center bg-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.1] transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h4 className="text-base font-body font-bold text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-sm text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold/[0.05] rounded-full -translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
