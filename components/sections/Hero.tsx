import Button from "@/components/ui/Button";
import { QrCode, Shield, MapPin, FileCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream to-white">
      <div className="container-page py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-6">
            <QrCode className="w-4 h-4" />
            Canada&apos;s Pet Passport &amp; QR Safety Platform
          </div>

          <h1 className="text-text-primary mb-6">
            Your Pet&apos;s Digital World
            <span className="block text-brand-green">in One Tag</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Give your pet a digital identity with instant QR recovery, secure
            document storage, vaccination reminders, and travel-ready
            organization — built for Canadian pet parents.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="/waitlist" variant="primary" size="lg">
              Get Your Free QR Tag
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-green" />
              Secure &amp; private
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-green" />
              Built for Canada
            </span>
            <span className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-brand-green" />
              Free to start
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
