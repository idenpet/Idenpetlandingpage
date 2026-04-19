import { PawPrint, QrCode, FolderLock } from "lucide-react";

const steps = [
  {
    icon: PawPrint,
    number: "01",
    title: "Create Your Pet Profile",
    description:
      "Enter your pet's details, upload a photo, and add emergency contacts. It takes less than five minutes to set up their digital identity.",
  },
  {
    icon: QrCode,
    number: "02",
    title: "Generate Your QR Identity",
    description:
      "Get a unique QR code linked to your pet's profile. Print it, share it, or attach it to their collar — scannable by any smartphone.",
  },
  {
    icon: FolderLock,
    number: "03",
    title: "Store Records & Stay Ready",
    description:
      "Upload vaccination records, health certificates, and travel documents. Set reminders so nothing expires unnoticed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-brand-cream">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="section-label bg-brand-green/10 text-brand-green mx-auto">
            <span>3 Simple Steps</span>
          </div>
          <h2 className="text-text-primary">How It Works</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Set up your pet&apos;s digital passport in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="card-premium p-8 text-center group">
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/15 transition-colors">
                <step.icon className="w-8 h-8 text-brand-green" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-gold text-brand-green-dark text-sm font-bold flex items-center justify-center shadow-soft">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-body font-bold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
