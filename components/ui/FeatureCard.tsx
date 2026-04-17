import {
  QrCode, CreditCard, FolderLock, Plane,
  Bell, ShieldAlert, Tag, Crown,
} from "lucide-react";
import type { Feature } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  QrCode, CreditCard, FolderLock, Plane,
  Bell, ShieldAlert, Tag, Crown,
};

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || QrCode;

  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 flex-shrink-0">
        <Icon className="w-6 h-6 text-brand-green" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-body font-bold text-text-primary">
          {feature.title}
        </h3>
        {feature.comingSoon && (
          <span className="badge-gold text-[10px]">Coming Soon</span>
        )}
      </div>
      <p className="text-sm text-text-secondary leading-relaxed flex-1">
        {feature.description}
      </p>
    </div>
  );
}
