import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ProTradeVision terms of service outline the conditions for using our website and content.",
};

export default function TermsOfService() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Terms of Service</h1>
          <p className="text-sm text-text-light mt-2">Last updated: May 20, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <h2 className="text-xl font-bold text-text-primary">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ProTradeVision (&ldquo;the Website&rdquo;), you agree to comply
              with and be bound by these Terms of Service. If you do not agree with any part of these
              terms, you must not use our website.
            </p>

            <h2 className="text-xl font-bold text-text-primary">2. No Financial Advice</h2>
            <p>
              <strong className="text-text-primary">Important:</strong> ProTradeVision provides
              educational information and market analysis for informational purposes only. Nothing on
              this website constitutes financial advice, investment advice, or a recommendation to buy
              or sell any financial instrument.
            </p>
            <p>
              Trading forex, cryptocurrencies, binary options, and participating in proprietary trading
              firm evaluations carries significant risk. You should consult with a qualified financial
              advisor before making any trading decisions.
            </p>

            <h2 className="text-xl font-bold text-text-primary">3. Risk Disclaimer</h2>
            <div className="p-4 bg-warning/10 border border-warning/30 rounded-md">
              <p className="text-warning font-semibold mb-2">⚠ Risk Warning</p>
              <p>
                Trading forex, cryptocurrencies, and binary options involves substantial risk of loss
                and is not suitable for all investors. You could lose some or all of your invested
                capital. Never invest money you cannot afford to lose. Past performance does not
                guarantee future results.
              </p>
              <p className="mt-2">
                Proprietary trading firm evaluations carry their own risks. Evaluation fees are
                non-refundable in most cases, and passing an evaluation does not guarantee a funded
                account. Profit splits, drawdown limits, and trading rules vary between firms and
                should be carefully reviewed before committing. Never pay for a prop firm evaluation
                with money you cannot afford to lose.
              </p>
            </div>

            <h2 className="text-xl font-bold text-text-primary">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is
              the property of ProTradeVision or its content creators and is protected by intellectual
              property laws. You may not reproduce, distribute, or create derivative works without our
              prior written consent.
            </p>

            <h2 className="text-xl font-bold text-text-primary">5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information through our forms</li>
            </ul>

            <h2 className="text-xl font-bold text-text-primary">6. Limitation of Liability</h2>
            <p>
              ProTradeVision and its owners, employees, or affiliates shall not be liable for any
              direct, indirect, incidental, consequential, or punitive damages arising from your use
              of or inability to use our website.
            </p>
            <p className="mt-3">
              <strong>Class Action Waiver:</strong> Any dispute related to your use of this website
              shall be resolved individually, and you waive any right to participate in a class action
              lawsuit or class-wide arbitration.
            </p>

            <h2 className="text-xl font-bold text-text-primary">7. Binary Options — Additional Terms</h2>
            <div className="p-4 bg-error/5 border border-error/30 rounded-md">
              <p className="text-error font-semibold mb-2">⚠ Binary Options Warning</p>
              <p>
                Binary options trading is banned or severely restricted for retail investors in the
                European Union (ESMA), United Kingdom (FCA), Australia (ASIC), and Canada (CSA).
                Information about binary options platforms on this website is provided for educational
                and informational purposes only. It does not constitute an offer or solicitation to
                trade binary options in any jurisdiction where such trading is restricted or prohibited.
              </p>
              <p className="mt-2">
                You are responsible for verifying the legality of binary options trading in your
                jurisdiction before accessing any platform or service mentioned on this website.
              </p>
            </div>

            <h2 className="text-xl font-bold text-text-primary">8. Affiliate Disclosure</h2>
            <p>
              ProTradeVision may receive compensation (commissions or referral fees) when you visit
              or sign up with brokers, exchanges, proprietary trading firms, or platforms through
              links on this website. This compensation may influence the placement and ranking of
              these services. We strive to maintain objectivity in our reviews and comparisons, but
              you should assume that we have a financial relationship with any listed platform.
            </p>
            <p className="mt-2">
              Always conduct your own due diligence before choosing a broker or trading platform.
            </p>

            <h2 className="text-xl font-bold text-text-primary">9. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of Belize, without regard to its conflict of law provisions. Any disputes arising from
              these terms shall be resolved in the courts of Belize.
            </p>
            <p className="mt-2">
              If you access this website from outside Belize, you are responsible for compliance
              with local laws applicable to your jurisdiction.
            </p>

            <h2 className="text-xl font-bold text-text-primary">10. External Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              content, privacy policies, or practices of these websites. Visiting linked sites is at
              your own risk.
            </p>

            <h2 className="text-xl font-bold text-text-primary">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting. Your continued use of the website after changes constitutes
              acceptance of the new terms.
            </p>

            <h2 className="text-xl font-bold text-text-primary">12. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:contact@www.protradevision.com" className="text-link hover:underline">
                contact@www.protradevision.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
