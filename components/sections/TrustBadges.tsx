import { QrCode, Lock, MapPin, Plane } from "lucide-react";

const badges = [
  { icon: QrCode, label: "QR recovery in seconds" },
  { icon: Lock, label: "Secure digital records" },
  { icon: MapPin, label: "Built for Canadian pet parents" },
  { icon: Plane, label: "Travel-ready document support" },
];

export default function TrustBadges() {
  return (
    <section className="bg-brand-green">
      <div className="container-page py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-3 py-3 text-white/90"
            >
              <badge.icon className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
