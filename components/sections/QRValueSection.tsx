import { QrCode, Smartphone, Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";

const steps = [
  {
    icon: QrCode,
    title: "Pet found — tag scanned",
    description: "Anyone points their phone camera at the QR tag.",
  },
  {
    icon: Smartphone,
    title: "Pet profile opens instantly",
    description: "Name, photo, emergency info — no app download needed.",
  },
  {
    icon: Phone,
    title: "Owner contacted immediately",
    description: "Your phone number and contact details are one tap away.",
  },
];

export default function QRValueSection() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Emotional copy */}
          <div>
            <div className="section-label bg-brand-green/10 text-brand-green">
              <QrCode className="w-4 h-4" />
              QR Recovery
            </div>
            <h2 className="text-text-primary mb-5">
              If your pet gets lost, can someone reach you instantly?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              Microchips need a scanner. Collar tags have limited space. With
              Idenpet, anyone who finds your pet simply scans the QR code with
              their phone — and your contact information appears in seconds.
              No app. No sign-up. No delays.
            </p>

            <div className="space-y-6 mb-10">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-6 bg-brand-green/20" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-base font-body font-bold text-text-primary mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/waitlist" variant="primary" size="lg">
              Create Free QR Profile
            </Button>
          </div>

          {/* Right — QR preview mockup */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Phone mockup frame */}
              <div className="w-72 md:w-80 bg-white rounded-3xl shadow-premium border border-surface-border overflow-hidden">
                {/* Phone status bar */}
                <div className="bg-brand-green px-5 py-3 flex items-center justify-between">
                  <span className="text-white/70 text-xs font-medium">idenpet.io/pet/buddy</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  </div>
                </div>

                {/* Pet profile content */}
                <div className="p-6">
                  {/* Pet avatar */}
                  <div className="w-20 h-20 rounded-full bg-brand-cream mx-auto mb-4 flex items-center justify-center border-3 border-brand-green/20">
                    <span className="text-3xl">🐕</span>
                  </div>

                  <div className="text-center mb-5">
                    <h3 className="text-lg font-body font-bold text-text-primary">Buddy</h3>
                    <p className="text-sm text-text-muted">Golden Retriever &bull; 3 years</p>
                  </div>

                  {/* Info items */}
                  <div className="space-y-3 mb-5">
                    {[
                      { label: "Owner", value: "Jane Smith" },
                      { label: "Phone", value: "(416) 555-0123" },
                      { label: "Microchip", value: "985112345678901" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between items-center py-2 border-b border-surface-border last:border-0"
                      >
                        <span className="text-xs text-text-muted">{item.label}</span>
                        <span className="text-sm font-semibold text-text-primary">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vaccination status */}
                  <div className="bg-brand-green/5 rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Check className="w-4 h-4 text-brand-green" />
                      <span className="text-xs font-bold text-brand-green">Vaccinations Up to Date</span>
                    </div>
                    <p className="text-[11px] text-text-muted pl-6">Rabies &bull; DHPP &bull; Bordetella</p>
                  </div>

                  {/* CTA button in mockup */}
                  <div className="bg-brand-green text-white text-center py-3 rounded-xl text-sm font-semibold">
                    Contact Owner
                  </div>
                </div>
              </div>

              {/* Scan indicator */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-green-dark px-4 py-1.5 rounded-full text-xs font-bold shadow-premium flex items-center gap-1.5 animate-float-delayed">
                <QrCode className="w-3.5 h-3.5" />
                QR Scanned!
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-8 bg-brand-green/5 rounded-[2rem] -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
