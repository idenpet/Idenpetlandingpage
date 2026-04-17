import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Idenpet terms of service. Read the terms governing your use of our pet identity and QR safety platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page max-w-3xl">
        <h1 className="text-text-primary mb-4">Terms of Service</h1>
        <p className="text-text-muted mb-8">Last updated: April 1, 2026</p>

        <div className="prose-content">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Idenpet (&ldquo;the Site&rdquo; and &ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site or Service.
          </p>

          <h2>Description of Service</h2>
          <p>
            Idenpet is a pet identity, QR safety, document storage, and travel readiness platform. We provide tools to help Canadian pet owners create digital pet profiles, generate QR recovery codes, store pet documents, set reminders, and organize travel-related records. We are not a veterinary service, government authority, or insurance provider.
          </p>

          <h2>Use of the Service</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information when creating pet profiles and accounts</li>
            <li>Use the Service for lawful purposes only</li>
            <li>Not attempt to disrupt or compromise the Service&apos;s security or functionality</li>
            <li>Not scrape, copy, or reproduce Service content without written permission</li>
            <li>Keep your account credentials secure</li>
          </ul>

          <h2>User Content and Documents</h2>
          <p>
            You retain ownership of all documents and content you upload to Idenpet. By uploading content, you grant us a limited licence to store, display, and transmit that content solely to provide the Service to you.
          </p>

          <h2>QR Profiles</h2>
          <p>
            QR profiles are designed to be publicly scannable. You are responsible for configuring what information is visible on your pet&apos;s public QR profile. Idenpet is not responsible for how third parties use publicly visible profile information.
          </p>

          <h2>Travel Information Disclaimer</h2>
          <p>
            Idenpet provides general organizational tools and guidance for pet travel preparation. We do not provide official travel documentation, veterinary certificates, or government approvals. Always verify current requirements with official authorities before travel.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our Service may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of any third-party sites.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on the Site — including text, graphics, logos, and software — is the property of Idenpet or its content suppliers and is protected by Canadian and international intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Idenpet is provided &ldquo;as is&rdquo; without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service or reliance on information provided.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:legal@idenpet.io" className="text-brand-green hover:underline">
              legal@idenpet.io
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
