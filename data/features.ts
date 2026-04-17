import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "qr-recovery",
    title: "Instant QR Recovery",
    description:
      "Generate a unique QR code linked to your pet's profile. Anyone who finds your pet can scan it to access emergency contact details and critical health information — no app required.",
    icon: "QrCode",
    category: "safety",
  },
  {
    id: "pet-passport",
    title: "Digital Pet Passport",
    description:
      "Create a comprehensive digital identity for your pet including photos, breed details, medical history, microchip number, and emergency contacts — all in one secure place.",
    icon: "CreditCard",
    category: "organization",
  },
  {
    id: "document-locker",
    title: "Secure Document Locker",
    description:
      "Upload and store vaccination records, health certificates, registration papers, and receipts. Access them instantly from anywhere — no more digging through paper files.",
    icon: "FolderLock",
    category: "organization",
  },
  {
    id: "travel-readiness",
    title: "Travel Document Readiness",
    description:
      "Organize the documents you need for domestic trips, US border crossings, and international travel. Follow guided checklists so nothing gets forgotten.",
    icon: "Plane",
    category: "travel",
  },
  {
    id: "reminders",
    title: "Reminders & Expiry Tracking",
    description:
      "Set reminders for vaccinations, licence renewals, flea and tick treatments, and vet appointments. Never miss an important date for your pet's care.",
    icon: "Bell",
    category: "organization",
  },
  {
    id: "lost-pet-mode",
    title: "Lost Pet Mode",
    description:
      "Activate Lost Pet Mode to flag your pet's QR profile as missing. Anyone who scans the tag will see a prominent alert with your contact details and instructions.",
    icon: "ShieldAlert",
    category: "safety",
  },
  {
    id: "qr-tag-ordering",
    title: "QR Tag Ordering",
    description:
      "Order a durable, waterproof QR pet tag that links directly to your pet's Idenpet profile. Attach it to any collar for instant real-world scanability.",
    icon: "Tag",
    category: "premium",
    comingSoon: true,
  },
  {
    id: "premium-pro",
    title: "Premium & Pro Features",
    description:
      "Unlock advanced features including multi-pet management, priority lost-pet alerts, custom QR tag designs, vet record sharing, and family access controls.",
    icon: "Crown",
    category: "premium",
    comingSoon: true,
  },
];
