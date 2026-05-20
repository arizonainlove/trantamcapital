import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TrantamCapital privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Privacy Policy</h1>
          <p className="text-sm text-text-light mt-2">Last updated: May 20, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <h2 className="text-xl font-bold text-text-primary">1. Introduction</h2>
            <p>
              TrantamCapital (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website.
            </p>

            <h2 className="text-xl font-bold text-text-primary">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscribe to our newsletter (email address)</li>
              <li>Contact us through our contact form (name, email, subject, message)</li>
              <li>Browse our website (automatically collected data via cookies)</li>
            </ul>

            <h2 className="text-xl font-bold text-text-primary">3. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and
              store certain information. Cookies are files with small amounts of data that may include
              an anonymous unique identifier.
            </p>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
            </ul>

            <h2 className="text-xl font-bold text-text-primary">4. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sending newsletters and market updates (with your consent)</li>
              <li>Responding to your inquiries</li>
              <li>Improving our website and user experience</li>
              <li>Analyzing website traffic and usage patterns</li>
            </ul>

            <h2 className="text-xl font-bold text-text-primary">5. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information. However, no method of transmission over the Internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-bold text-text-primary">6. Third-Party Services</h2>
            <p>
              We may use third-party services such as Google Analytics to analyze website traffic.
              These services have their own privacy policies governing the use of your information.
            </p>

            <h2 className="text-xl font-bold text-text-primary">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-xl font-bold text-text-primary">8. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:contact@trantamcapital.com" className="text-link hover:underline">
                contact@trantamcapital.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
