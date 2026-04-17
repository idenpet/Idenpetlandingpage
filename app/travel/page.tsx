import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { travelChecklists } from "@/data/travel";
import TravelChecklistCard from "@/components/ui/TravelChecklistCard";
import CTABanner from "@/components/ui/CTABanner";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pet Travel Readiness",
  description:
    "Organize your pet's travel documents with Idenpet. Checklists for domestic, US border, and international travel — so you and your pet are always ready.",
  path: "/travel",
});

export default function TravelPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
        <div className="container-page max-w-4xl text-center">
          <h1 className="text-text-primary mb-4">
            Travel With Your Pet, Prepared
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Whether it&apos;s a road trip, a US border crossing, or an
            international flight — Idenpet helps you organize every document
            your pet needs before you go.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {travelChecklists.map((checklist) => (
              <TravelChecklistCard key={checklist.id} checklist={checklist} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-cream">
        <div className="container-page max-w-3xl">
          <div className="card p-6 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-body font-bold text-text-primary mb-1">
                Important Notice
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Idenpet provides organizational tools and general guidance to
                help you prepare for pet travel. Requirements change frequently
                — always verify current rules with official government sources
                (CFIA, CDC, destination country authorities) and your airline
                before travelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-text-primary mb-6 text-center">
            How Idenpet Helps You Travel-Ready
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Store All Travel Documents",
                text: "Upload rabies certificates, health certificates, and vaccination records to your pet's secure document locker. Access them anywhere.",
              },
              {
                title: "Follow Guided Checklists",
                text: "Select your travel type — domestic, US border, or international — and follow a clear checklist so nothing gets forgotten.",
              },
              {
                title: "Track Expiry Dates",
                text: "Set reminders for document renewals and vaccination boosters. Know well in advance if something needs updating before your trip.",
              },
              {
                title: "Share With Your Vet",
                text: "Easily share your pet's travel document checklist with your veterinarian so they can prepare the right certificates.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-body font-bold text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Organize Your Pet's Travel Documents"
        description="Join Idenpet to store documents, follow checklists, and travel with confidence."
        primaryCta={{ label: "Join the Waitlist", href: "/waitlist" }}
        secondaryCta={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}
