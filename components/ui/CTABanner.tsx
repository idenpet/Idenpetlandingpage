import Button from "./Button";

interface CTABannerProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "green" | "cream";
}

export default function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "green",
}: CTABannerProps) {
  const isGreen = variant === "green";

  return (
    <section
      className={`section-padding ${
        isGreen ? "bg-brand-green" : "bg-brand-cream-dark"
      }`}
    >
      <div className="container-page text-center">
        <h2
          className={`mb-4 ${isGreen ? "text-white" : "text-text-primary"}`}
        >
          {title}
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto mb-8 ${
            isGreen ? "text-white/80" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={primaryCta.href}
            variant={isGreen ? "secondary" : "primary"}
            size="lg"
          >
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className={isGreen ? "border-white text-white hover:bg-white hover:text-brand-green" : ""}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
