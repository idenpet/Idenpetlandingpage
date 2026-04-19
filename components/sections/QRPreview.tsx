import { qrProducts } from "@/data/products";
import QRPreviewCard from "@/components/ui/QRPreviewCard";
import { Tag } from "lucide-react";

export default function QRPreview() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="section-label bg-brand-gold/10 text-brand-gold-dark mx-auto">
            <Tag className="w-4 h-4" />
            QR Tags
          </div>
          <h2 className="text-text-primary">Your Pet&apos;s QR Identity</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Start free with a digital QR profile. Upgrade to a physical tag
            when you&apos;re ready — your pet&apos;s safety, your way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {qrProducts.map((product) => (
            <QRPreviewCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
