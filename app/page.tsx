import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import HowItWorks from "@/components/sections/HowItWorks";
import QRValueSection from "@/components/sections/QRValueSection";
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
      <QRValueSection />
      <CoreFeatures />
      <WhyIdenpet />
      <QRPreview />
      <TravelReadiness />
      <CanadianMission />
      <CTABanner
        title="Join Canada's #1 Pet Identity Platform"
        description="Create a free digital pet passport, generate a QR recovery profile, and keep your pet safe and organized — trusted by Canadian pet parents coast to coast."
        primaryCta={{ label: "Get Your Free QR Tag", href: "/waitlist" }}
        secondaryCta={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}
