"use client";

import Button from "@/components/ui/Button";
import { Shield, Clock, CreditCard, QrCode, PawPrint, Heart, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream">
      <div className="container-page py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/15 text-brand-gold-dark text-sm font-bold mb-5 animate-fade-up">
              <span className="text-base" role="img" aria-label="Canada">🇨🇦</span>
              100% Canadian Pet Identity Platform
            </div>

            <h1 className="text-text-primary mb-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Canada&apos;s #1
              <span className="block text-brand-green">Pet Identity Platform</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Protect your pet with a digital identity, instant QR recovery,
              secure records, and travel-ready organization — built for
              Canadian pet parents.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button href="/waitlist" variant="primary" size="lg">
                Get Your Free QR Tag
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Micro trust elements */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5 text-sm text-text-muted animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-green" />
                Free to start
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-brand-green" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-green" />
                Takes less than 1 minute
              </span>
            </div>
          </div>

          {/* Right — 3D Dog Visual */}
          <div className="relative flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Glow background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-brand-green/10 via-brand-gold/10 to-brand-cream opacity-80 blur-3xl animate-pulse-soft" />
            </div>

            {/* Dog visual container */}
            <div className="relative z-10 animate-float">
              <div className="w-72 h-72 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-3xl bg-gradient-to-br from-white to-brand-cream border border-surface-border shadow-premium overflow-hidden flex items-center justify-center">
                {/* 3D dog placeholder — replace with actual image */}
                <div className="text-center p-8">
                  <div className="relative">
                    <PawPrint className="w-24 h-24 md:w-32 md:h-32 text-brand-green/20 mx-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                        <QrCode className="w-8 h-8 md:w-10 md:h-10 text-brand-green" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-text-secondary">
                    Your pet&apos;s digital identity
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    One scan. Instant access.
                  </p>
                </div>
              </div>

              {/* Floating badges around the visual */}
              <div className="absolute -top-3 -right-3 md:top-4 md:-right-6 bg-white rounded-2xl shadow-premium px-4 py-3 flex items-center gap-2.5 animate-float-delayed">
                <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">Secure</p>
                  <p className="text-[10px] text-text-muted">Encrypted data</p>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 md:bottom-4 md:-left-6 bg-white rounded-2xl shadow-premium px-4 py-3 flex items-center gap-2.5 animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">Trusted</p>
                  <p className="text-[10px] text-text-muted">By pet parents</p>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 hidden md:flex bg-white rounded-2xl shadow-premium px-3 py-2.5 items-center gap-2 animate-float">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] font-bold text-text-primary whitespace-nowrap">QR Scan Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-green/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/[0.04] rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-green/[0.02] rounded-full hidden lg:block" />
    </section>
  );
}
