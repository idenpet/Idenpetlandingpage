import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import WaitlistForm from "@/components/ui/WaitlistForm";
import { Shield, QrCode, FileCheck } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Join the Waitlist",
  description:
    "Join the Idenpet waitlist to get early access to Canada's pet passport and QR safety platform. Create your pet's digital identity for free.",
  path: "/waitlist",
});

const trustPoints = [
  {
    icon: QrCode,
    title: "Free QR Profile",
    text: "Create a digital pet passport and printable QR code at no cost.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    text: "Your pet's data is encrypted and never sold to third parties.",
  },
  {
    icon: FileCheck,
    title: "Early Access",
    text: "Be the first to try new features like physical QR tags and travel tools.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-text-primary mb-4">
                Join the Idenpet Waitlist
              </h1>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Be among the first Canadian pet parents to create a digital pet
                passport, generate a QR recovery profile, and organize your
                pet&apos;s important documents — all in one place.
              </p>

              <div className="space-y-5">
                {trustPoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-base font-body font-bold text-text-primary mb-0.5">
                        {point.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-body font-bold text-text-primary mb-1">
                Get Early Access
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                Fill in your details and we&apos;ll notify you when Idenpet is
                ready.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
