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
      className={`section-padding relative overflow-hidden ${
        isGreen ? "bg-brand-green" : "bg-brand-cream-dark"
      }`}
    >
      <div className="container-page text-center relative z-10">
        <h2
          className={`mb-4 ${isGreen ? "text-white" : "text-text-primary"}`}
        >
          {title}
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto mb-10 ${
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

      {isGreen && (
        <>
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/[0.06] rounded-full translate-x-1/3 translate-y-1/3" />
        </>
      )}
    </section>
  );
}
