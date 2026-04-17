import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import HowItWorks from "@/components/sections/HowItWorks";
import CoreFeatures from "@/components/sections/CoreFeatures";
import WhyIdenpet from "@/components/sections/WhyIdenpet";
import QRPreview from "@/components/sections/QRPreview";
import TravelReadiness from "@/components/sections/TravelReadiness";
import CanadianMission from "@/components/sections/CanadianMission";
import CTABanner from "@/components/ui/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <CoreFeatures />
      <WhyIdenpet />
      <QRPreview />
      <TravelReadiness />
      <CanadianMission />
      <CTABanner
        title="Give Your Pet the Safety They Deserve"
        description="Create a free digital pet passport, generate a QR recovery profile, and stay organized — all in one place."
        primaryCta={{ label: "Get Your Free QR Tag", href: "/waitlist" }}
        secondaryCta={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}
