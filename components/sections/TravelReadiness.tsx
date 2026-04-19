import { Plane, FileCheck, Clock, Share2 } from "lucide-react";
import Button from "@/components/ui/Button";

const highlights = [
  {
    icon: FileCheck,
    title: "Organize Travel Documents",
    description:
      "Store rabies certificates, health certificates, and vaccination records in one secure place — accessible anywhere.",
  },
  {
    icon: Plane,
    title: "Follow Guided Checklists",
    description:
      "Use travel-type-specific checklists so you know exactly what documents to prepare before your trip.",
  },
  {
    icon: Clock,
    title: "Track Expiry Dates",
    description:
      "Set reminders for document renewals and vaccination boosters so nothing expires before you travel.",
  },
  {
    icon: Share2,
    title: "Share With Your Vet",
    description:
      "Send your pet's checklist to your veterinarian so they can prepare the right certificates.",
  },
];

export default function TravelReadiness() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="section-label bg-brand-green/10 text-brand-green">
              <Plane className="w-4 h-4" />
              Travel Ready
            </div>
            <h2 className="text-text-primary mb-4">
              Travel With Your Pet, Stress-Free
            </h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              Whether it&apos;s a road trip across provinces or crossing the US
              border, Idenpet helps you organize every document your pet needs
              — so you can focus on the adventure.
            </p>
            <div className="space-y-5 mb-8">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/15 transition-colors">
                    <h.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-base font-body font-bold text-text-primary mb-0.5">
                      {h.title}
                    </h4>
                    <p className="text-sm text-text-secondary">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/travel" variant="outline">
              Explore Travel Readiness
            </Button>
          </div>

          <div className="bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 lg:p-12 shadow-premium border border-surface-border">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-body font-bold text-text-primary mb-2">
                Your Travel Checklist
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Domestic, US border, or international — we&apos;ve got you
                covered.
              </p>
              <div className="space-y-3 text-left max-w-xs mx-auto">
                {[
                  { label: "Rabies vaccination certificate", done: true },
                  { label: "Health certificate", done: true },
                  { label: "Microchip verification", done: true },
                  { label: "Pet identification (QR tag)", done: false },
                  { label: "Carrier or crate ready", done: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                      item.done ? "bg-brand-green border-brand-green" : "border-brand-green/30"
                    }`}>
                      {item.done && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={item.done ? "text-text-primary font-medium" : ""}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
