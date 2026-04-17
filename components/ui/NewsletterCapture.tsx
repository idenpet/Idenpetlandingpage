"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface NewsletterCaptureProps {
  variant?: "default" | "footer";
}

export default function NewsletterCapture({ variant = "default" }: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className={`flex-1 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
          isFooter
            ? "bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:ring-brand-gold"
            : "input-field"
        }`}
      />
      <button
        type="submit"
        className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
          isFooter
            ? "bg-brand-gold text-brand-green-dark hover:bg-brand-gold-light"
            : "btn-primary"
        }`}
      >
        {submitted ? (
          "Joined!"
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Join Idenpet</span>
          </>
        )}
      </button>
    </form>
  );
}
