import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Heart, Shield, Eye, MapPin } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "About Idenpet",
  description:
    "Learn about Idenpet — Canada's pet passport and QR safety platform. Our mission is to make pet ownership safer, smarter, and more organized for every Canadian family.",
  path: "/about",
});

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every feature we build starts with one question: does this help keep pets safer and give owners peace of mind?",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Your data is yours. We don't sell it, we don't share it, and we'll always be upfront about how Idenpet works.",
  },
  {
    icon: Heart,
    title: "Pet-First Design",
    description:
      "Built by pet owners, for pet owners. We focus on what actually matters in day-to-day pet ownership.",
  },
  {
    icon: MapPin,
    title: "Canadian Context",
    description:
      "Provincial considerations, Canadian travel rules, and local relevance — not a generic global tool adapted for Canada.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
        <div className="container-page max-w-4xl">
          <h1 className="text-center text-text-primary mb-6">About Idenpet</h1>
          <p className="text-center text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We&apos;re on a mission to make pet ownership safer, smarter, and
            more organized for every Canadian family.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <div className="prose-content">
            <h2>Why We Built Idenpet</h2>
            <p>
              As pet owners ourselves, we saw the same problems over and over:
              paper vaccination records lost in a drawer, microchip databases
              that require special scanners, travel documents scattered across
              emails and folders, and no simple way to share critical
              information if our pet was found by a stranger.
            </p>
            <p>
              We built Idenpet because Canadian pet parents deserve a modern
              solution. A single, secure platform where your pet&apos;s identity,
              records, and emergency contacts live together — accessible in
              seconds through a simple QR scan.
            </p>

            <h2>Our Mission</h2>
            <p>
              Idenpet exists to help every Canadian pet owner keep their pet
              safe, identified, and organized. We believe that when pet owners
              have easy access to the right tools — digital identity, instant
              recovery, organized records, and travel-readiness — both pets and
              their families benefit.
            </p>

            <h2>What Makes Idenpet Different</h2>
            <p>
              Traditional pet identification relies on methods that weren&apos;t
              built for how we live today. Microchips need special scanners.
              Paper records get lost. Collar tags have limited space. And none
              of them give a finder everything they need in one scan.
            </p>
            <p>
              Idenpet combines digital identity, QR technology, document
              storage, and smart reminders into one platform — designed
              specifically for Canadian pet owners, with Canadian travel
              requirements and provincial context built in.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-page">
          <h2 className="text-center text-text-primary mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="card p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-body font-bold text-text-primary mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join the Idenpet Community"
        description="Be among the first Canadian pet parents to create a digital pet passport and QR recovery profile."
        primaryCta={{ label: "Join the Waitlist", href: "/waitlist" }}
        secondaryCta={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}
