import Link from "next/link";
import { FOOTER_LINKS, CONTACT_EMAIL } from "@/lib/constants";
import NewsletterCapture from "@/components/ui/NewsletterCapture";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-heading font-bold">
                iden<span className="text-brand-gold">pet</span>
              </span>
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-sm">
              Canada&apos;s pet passport and QR safety platform. Create digital
              pet identities, store important records, and stay travel-ready —
              all in one place.
            </p>
            <div className="mt-6">
              <NewsletterCapture variant="footer" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold font-body uppercase tracking-wider text-white/50 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold font-body uppercase tracking-wider text-white/50 mb-4">
              Learn
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold font-body uppercase tracking-wider text-white/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Idenpet. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Questions?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand-gold hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
