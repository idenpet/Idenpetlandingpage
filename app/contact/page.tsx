"use client";

import { useState } from "react";
import { Mail, MessageSquare, Handshake } from "lucide-react";
import { CONTACT_EMAIL, SUPPORT_EMAIL, PARTNERSHIP_EMAIL } from "@/lib/constants";

const contactChannels = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about Idenpet or how it works.",
    email: CONTACT_EMAIL,
  },
  {
    icon: MessageSquare,
    title: "Support",
    description: "Need help using the platform? We're here for you.",
    email: SUPPORT_EMAIL,
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Interested in partnering with Idenpet? Let's talk.",
    email: PARTNERSHIP_EMAIL,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-brand-cream to-white">
        <div className="container-page max-w-4xl">
          <h1 className="text-center text-text-primary mb-4">Get in Touch</h1>
          <p className="text-center text-lg text-text-secondary max-w-xl mx-auto">
            Have a question, feedback, or partnership inquiry? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactChannels.map((channel) => (
              <div key={channel.title} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-lg font-body font-bold text-text-primary mb-2">
                  {channel.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {channel.description}
                </p>
                <a
                  href={`mailto:${channel.email}`}
                  className="text-sm font-semibold text-brand-green hover:underline"
                >
                  {channel.email}
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-text-primary mb-8">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-body font-bold text-text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-secondary">
                  Thank you for reaching out. We&apos;ll get back to you within
                  1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Subject
                  </label>
                  <select
                    className="select-field"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="input-field resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
