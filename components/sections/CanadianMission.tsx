import { Heart, MapPin, Shield } from "lucide-react";

export default function CanadianMission() {
  return (
    <section className="section-padding bg-brand-green text-white">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            100% Canadian
          </div>
          <h2 className="text-white mb-6">
            Built for Canadian Pet Parents, Coast to Coast
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Idenpet was created with one mission: make pet ownership safer,
            smarter, and more organized for every Canadian family. From Halifax
            to Vancouver, we&apos;re building the tools Canadian pet parents
            deserve.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
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
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-base font-body font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
