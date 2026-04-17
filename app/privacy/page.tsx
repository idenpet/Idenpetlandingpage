import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Idenpet's privacy policy. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page max-w-3xl">
        <h1 className="text-text-primary mb-4">Privacy Policy</h1>
        <p className="text-text-muted mb-8">Last updated: April 1, 2026</p>

        <div className="prose-content">
          <h2>Introduction</h2>
          <p>
            Idenpet (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website idenpet.io (the &ldquo;Site&rdquo;) and use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>We may collect information you voluntarily provide, including:</p>
          <ul>
            <li>Name and email address when you join the waitlist or create an account</li>
            <li>Pet information (name, breed, age, health details) when creating a pet profile</li>
            <li>Documents you upload to the secure document locker</li>
            <li>Province of residence for localized features</li>
            <li>Email address when subscribing to updates</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our Site, we may automatically collect:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address and general location</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website or source</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and improve our pet identity and document storage services</li>
            <li>Generate and maintain your pet&apos;s QR profile</li>
            <li>Send you reminders for vaccinations, renewals, and appointments</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send you relevant product updates (with your consent)</li>
            <li>Analyze site usage to improve our platform</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>QR Profile Visibility</h2>
          <p>
            When someone scans your pet&apos;s QR code, they will see the public safety profile you have configured. This may include your pet&apos;s name, photo, and your preferred contact method. You control what information is visible on the public profile.
          </p>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell your personal information to third parties. We may share limited information with service providers who help us operate the platform (e.g., hosting, email delivery), subject to strict confidentiality obligations.
          </p>

          <h2>Document Security</h2>
          <p>
            Documents uploaded to your secure document locker are encrypted and accessible only to you (and anyone you explicitly share them with). We implement industry-standard security measures to protect your stored documents.
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and understand usage patterns. You can control cookie preferences through your browser settings.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information and pet profiles</li>
            <li>Download your stored documents</li>
            <li>Withdraw consent for marketing communications</li>
            <li>File a complaint with a privacy authority</li>
          </ul>

          <h2>Canadian Privacy Law</h2>
          <p>
            Idenpet complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by the &ldquo;Last updated&rdquo; date at the top of this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@idenpet.io" className="text-brand-green hover:underline">
              privacy@idenpet.io
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
