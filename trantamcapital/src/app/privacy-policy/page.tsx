import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ProTradeVision privacy policy explains how we collect, use, and protect your personal information.",
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
              ProTradeVision (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website.
            </p>
            <p className="mt-2">
              ProTradeVision is the data controller responsible for your personal data. If you have
              any questions, please contact us at the email address provided below.
            </p>

            <h2 className="text-xl font-bold text-text-primary">2. Legal Basis for Processing (GDPR)</h2>
            <p>
              If you are a resident of the European Economic Area (EEA), we process your personal data
              under the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> When you subscribe to our newsletter or submit our contact form, you give explicit consent for us to process your data for those specific purposes.</li>
              <li><strong>Legitimate interests:</strong> We process website usage data (cookies) to improve our website and user experience.</li>
            </ul>
            <p className="mt-2">
              You have the right to withdraw consent at any time without affecting the lawfulness of
              processing based on consent before its withdrawal.
            </p>

            <h2 className="text-xl font-bold text-text-primary">3. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscribe to our newsletter (email address)</li>
              <li>Contact us through our contact form (name, email, subject, message)</li>
              <li>Browse our website (automatically collected data via cookies)</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> collect sensitive personal data such as financial information,
              government IDs, or trading history.
            </p>

            <h2 className="text-xl font-bold text-text-primary">4. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfill the purposes for which
              it was collected:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact form submissions:</strong> Retained for 12 months after the last communication</li>
              <li><strong>Newsletter subscriptions:</strong> Retained until you unsubscribe</li>
              <li><strong>Analytics data:</strong> Retained for 26 months</li>
            </ul>

            <h2 className="text-xl font-bold text-text-primary">5. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and
              store certain information. Cookies are files with small amounts of data that may include
              an anonymous unique identifier.
            </p>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly. These include session cookies for admin authentication (admin_token). These cannot be disabled.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (page views, traffic sources, user behavior). We use Vercel Analytics, which is a privacy-friendly analytics service that does not track users across websites.</li>
            </ul>
            <p className="mt-2">
              You can manage or disable non-essential cookies through our cookie consent banner
              when you first visit our website, or by adjusting your browser settings. Note that
              disabling essential cookies may affect the functionality of certain parts of the
              website.
            </p>
            <p className="mt-2">
              For more information about how to manage cookies in your browser, visit
              aboutcookies.org or your browser&rsquo;s help documentation.
            </p>

            <h2 className="text-xl font-bold text-text-primary">6. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sending newsletters and market updates (with your consent)</li>
              <li>Responding to your inquiries</li>
              <li>Improving our website and user experience</li>
              <li>Analyzing website traffic and usage patterns</li>
            </ul>

            <h2 className="text-xl font-bold text-text-primary">7. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information, including encryption in transit (HTTPS) and access controls on
              our administrative systems. However, no method of transmission over the Internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-bold text-text-primary">8. Third-Party Services</h2>
            <p>
              We may use third-party services such as Vercel (hosting) and GitHub (content storage)
              to operate our website. These services have their own privacy policies governing the use
              of your information. Where third-party processors are used, we have data processing
              agreements in place to ensure your data is protected.
            </p>

            <h2 className="text-xl font-bold text-text-primary">9. International Data Transfers</h2>
            <p>
              If you are in the European Economic Area (EEA), your personal data may be transferred to
              and processed in countries outside the EEA (including the United States). We ensure these
              transfers are protected by appropriate safeguards, such as Standard Contractual Clauses
              (SCCs) adopted by the European Commission.
            </p>

            <h2 className="text-xl font-bold text-text-primary">10. Your Rights (GDPR)</h2>
            <p>If you are a resident of the European Economic Area (EEA), you have the following rights under the GDPR:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Right to rectification:</strong> Correct inaccurate data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li><strong>Right to restrict processing:</strong> Limit how we use your data</li>
              <li><strong>Right to data portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
              <li><strong>Right to lodge a complaint:</strong> File a complaint with your local data protection supervisory authority (e.g., the ICO in the United Kingdom) if you believe we have violated your data protection rights</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:contact@www.protradevision.com" className="text-link hover:underline">
                contact@www.protradevision.com
              </a>
              . We will respond within one month of receiving your request. This period may be
              extended by up to two months for complex requests or if we receive a high volume
              of requests, and we will inform you of any such extension within the initial month.
            </p>

            <h2 className="text-xl font-bold text-text-primary">11. Data Breach Notification</h2>
            <p>
              In the event of a personal data breach that poses a risk to your rights and freedoms,
              we will notify the relevant supervisory authority within 72 hours of becoming aware
              of the breach, as required by Article 33 of the GDPR.
            </p>
            <p className="mt-2">
              If the breach is likely to result in a high risk to your rights and freedoms, we will
              also notify you without undue delay in accordance with Article 34 of the GDPR. Such
              notification will include the nature of the breach, the categories of data affected,
              recommended mitigation measures, and our contact point for further information.
            </p>

            <h2 className="text-xl font-bold text-text-primary">12. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data protection
              rights, please contact us at{" "}
              <a href="mailto:contact@www.protradevision.com" className="text-link hover:underline">
                contact@www.protradevision.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
