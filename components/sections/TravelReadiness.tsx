import { Plane, FileCheck, Clock } from "lucide-react";
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
];

export default function TravelReadiness() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge-green mb-4 inline-block">Travel Ready</span>
            <h2 className="text-text-primary mb-4">
              Travel With Your Pet, Stress-Free
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Whether it&apos;s a road trip across provinces or crossing the US
              border, Idenpet helps you organize every document your pet needs
              — so you can focus on the adventure.
            </p>
            <div className="space-y-6 mb-8">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
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

          <div className="bg-brand-cream rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <Plane className="w-16 h-16 text-brand-green mx-auto mb-6 opacity-30" />
              <h3 className="text-xl font-body font-bold text-text-primary mb-2">
                Your Travel Checklist
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Domestic, US border, or international — we&apos;ve got you
                covered.
              </p>
              <div className="space-y-3 text-left max-w-xs mx-auto">
                {[
                  "Rabies vaccination certificate",
                  "Health certificate",
                  "Microchip verification",
                  "Pet identification (QR tag)",
                  "Carrier or crate ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-brand-green/30 flex-shrink-0" />
                    {item}
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
