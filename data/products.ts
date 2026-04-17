import type { QRProduct } from "@/types";

export const qrProducts: QRProduct[] = [
  {
    id: "free-digital",
    name: "Free Digital QR Profile",
    description:
      "Create your pet's digital identity and generate a free QR code you can print, screenshot, or share anywhere.",
    price: "Free",
    features: [
      "Digital pet passport",
      "Printable QR code",
      "Emergency contact display",
      "Basic document storage",
      "Lost pet mode",
    ],
  },
  {
    id: "physical-tag",
    name: "Idenpet QR Tag",
    description:
      "A durable, waterproof QR tag that clips onto any collar. Scannable by any smartphone — no app needed.",
    price: "$14.99",
    features: [
      "Everything in Free",
      "Waterproof aluminum tag",
      "Instant scan — no app required",
      "UV and scratch resistant",
      "Fits any collar or harness",
    ],
    highlighted: true,
    comingSoon: true,
  },
  {
    id: "premium-collar",
    name: "Premium Collar Tag",
    description:
      "A sleek, engraved QR collar tag with premium finish. Designed for pet owners who want the best.",
    price: "$24.99",
    features: [
      "Everything in QR Tag",
      "Premium matte finish",
      "Engraved pet name",
      "Priority lost-pet alerts",
      "Multi-pet management",
    ],
    comingSoon: true,
  },
];
