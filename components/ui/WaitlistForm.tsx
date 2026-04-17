"use client";

import { useState } from "react";
import type { WaitlistFormData } from "@/types";

const provinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
  "Nunavut", "Ontario", "Prince Edward Island", "Quebec",
  "Saskatchewan", "Yukon",
];

const interestOptions = [
  { value: "qr-tag", label: "QR Pet Tag" },
  { value: "travel", label: "Travel Readiness" },
  { value: "reminders", label: "Health Reminders" },
  { value: "document-locker", label: "Document Storage" },
];

export default function WaitlistForm() {
  const [form, setForm] = useState<WaitlistFormData>({
    ownerName: "",
    email: "",
    petName: "",
    petType: "dog",
    province: "",
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleInterest = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-body font-bold text-text-primary mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-text-secondary">
          We&apos;ll notify you when Idenpet launches. Check your email for
          confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-text-primary mb-1.5">
            Your Name
          </label>
          <input
            id="ownerName"
            name="ownerName"
            type="text"
            required
            value={form.ownerName}
            onChange={handleChange}
            className="input-field"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="input-field"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="petName" className="block text-sm font-medium text-text-primary mb-1.5">
            Pet&apos;s Name
          </label>
          <input
            id="petName"
            name="petName"
            type="text"
            required
            value={form.petName}
            onChange={handleChange}
            className="input-field"
            placeholder="Buddy"
          />
        </div>
        <div>
          <label htmlFor="petType" className="block text-sm font-medium text-text-primary mb-1.5">
            Pet Type
          </label>
          <select
            id="petType"
            name="petType"
            value={form.petType}
            onChange={handleChange}
            className="select-field"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="province" className="block text-sm font-medium text-text-primary mb-1.5">
            Province
          </label>
          <select
            id="province"
            name="province"
            value={form.province}
            onChange={handleChange}
            className="select-field"
            required
          >
            <option value="">Select province</option>
            {provinces.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-2">
          I&apos;m interested in (optional)
        </p>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleInterest(opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                form.interests.includes(opt.value)
                  ? "bg-brand-green text-white border-brand-green"
                  : "bg-white text-text-secondary border-surface-border hover:border-brand-green hover:text-brand-green"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="btn-primary w-full text-base py-3.5">
        Join the Waitlist
      </button>

      <p className="text-xs text-text-muted text-center">
        No spam, ever. We&apos;ll only email you about Idenpet updates and
        your early access.
      </p>
    </form>
  );
}
