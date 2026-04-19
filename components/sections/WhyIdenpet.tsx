import { Zap, FileText, PawPrint, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Faster Than Outdated Methods",
    description:
      "Microchips require a scanner. Paper records get lost. A QR tag on your pet's collar gives anyone instant access to their profile — in seconds.",
  },
  {
    icon: FileText,
    title: "Easier Than Paper Records",
    description:
      "No more binders, folders, or fridge magnets. Upload vaccination records, health certificates, and vet notes to one secure digital locker.",
  },
  {
    icon: PawPrint,
    title: "Built for Real Pet Ownership",
    description:
      "Reminders for vaccinations, licence renewals, and treatments. Organized documents for boarding, daycare, and vet visits. Tools that fit your actual routine.",
  },
  {
    icon: MapPin,
    title: "Designed for Canadian Pet Parents",
    description:
      "Provincial considerations, Canadian travel requirements, and local context built in — not a generic global tool adapted for Canada.",
  },
];

export default function WhyIdenpet() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="section-label bg-brand-green/10 text-brand-green mx-auto">
            Why Idenpet?
          </div>
          <h2 className="text-text-primary">
            Modern Tools for Modern Pet Parents
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Traditional pet identification and record-keeping wasn&apos;t built
            for how we live today. Idenpet is.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="card-premium p-7 flex gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/15 transition-colors">
                <reason.icon className="w-7 h-7 text-brand-green" />
              </div>
              <div>
                <h3 className="text-lg font-body font-bold text-text-primary mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
