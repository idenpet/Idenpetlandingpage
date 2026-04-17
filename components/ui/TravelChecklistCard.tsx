import { CheckCircle, Circle } from "lucide-react";
import type { TravelChecklist } from "@/types";

interface TravelChecklistCardProps {
  checklist: TravelChecklist;
}

export default function TravelChecklistCard({ checklist }: TravelChecklistCardProps) {
  return (
    <div className="card p-6 h-full">
      <h3 className="text-xl font-body font-bold text-text-primary mb-2">
        {checklist.title}
      </h3>
      <p className="text-sm text-text-secondary mb-5">
        {checklist.description}
      </p>
      <ul className="space-y-3">
        {checklist.items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            {item.required ? (
              <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
            )}
            <div>
              <span className="text-sm font-medium text-text-primary">
                {item.label}
                {item.required && (
                  <span className="ml-1.5 text-[10px] font-semibold text-brand-green uppercase">
                    Required
                  </span>
                )}
              </span>
              {item.description && (
                <p className="text-xs text-text-muted mt-0.5">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
