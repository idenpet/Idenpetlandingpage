import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "Travel", href: "/travel" },
  { label: "About", href: "/about" },
  {
    label: "Learn",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
    ],
  },
  { label: "Join the Waitlist", href: "/waitlist" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/features" },
    { label: "QR Tag", href: "/features#qr-recovery" },
    { label: "Travel Readiness", href: "/travel" },
    { label: "Pet Passport", href: "/features#pet-passport" },
  ],
  learn: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/guides" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const CONTACT_EMAIL = "hello@idenpet.io";
export const SUPPORT_EMAIL = "support@idenpet.io";
export const PARTNERSHIP_EMAIL = "partners@idenpet.io";
