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
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-text-primary">Why Idenpet?</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Traditional pet identification and record-keeping wasn&apos;t built
            for modern pet parents. Idenpet is.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="text-lg font-body font-bold text-text-primary mb-1">
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
