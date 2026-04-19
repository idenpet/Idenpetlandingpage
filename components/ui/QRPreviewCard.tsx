import { Check } from "lucide-react";
import type { QRProduct } from "@/types";
import Button from "./Button";

interface QRPreviewCardProps {
  product: QRProduct;
}

export default function QRPreviewCard({ product }: QRPreviewCardProps) {
  return (
    <div
      className={`card-premium p-7 flex flex-col h-full ${
        product.highlighted ? "ring-2 ring-brand-gold shadow-glow-gold" : ""
      }`}
    >
      {product.highlighted && (
        <span className="badge-gold self-start mb-4 text-xs">Most Popular</span>
      )}
      {product.comingSoon && !product.highlighted && (
        <span className="badge text-xs bg-surface-muted text-text-muted self-start mb-4">
          Coming Soon
        </span>
      )}

      <h3 className="text-xl font-body font-bold text-text-primary mb-1">
        {product.name}
      </h3>
      <p className="text-3xl font-heading font-bold text-brand-green mb-3">
        {product.price}
      </p>
      <p className="text-sm text-text-secondary mb-6 flex-1">
        {product.description}
      </p>

      <ul className="space-y-2.5 mb-7">
        {product.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-sm text-text-secondary">
            <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
            {feat}
          </li>
        ))}
      </ul>

      <Button
        href="/waitlist"
        variant={product.highlighted ? "primary" : "outline"}
        size="md"
        className="w-full"
      >
        {product.comingSoon ? "Join Waitlist" : "Get Started Free"}
      </Button>
    </div>
  );
}
