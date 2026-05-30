import Link from "next/link";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              ProTrade<span className="text-primary">Vision</span>
            </h3>
            <p className="text-sm text-text-light leading-relaxed">
              Your trusted source for forex broker reviews, crypto exchange
              comparisons, and binary options education. Making informed trading
              decisions since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "News", href: "/news" },
                { label: "For Beginners", href: "/for-beginners" },
                { label: "Investment Analysis", href: "/investment-analysis" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gold">
              Markets
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Forex Brokers", href: "/forex-broker" },
                { label: "Crypto Exchanges", href: "/crypto-exchange" },
                { label: "Binary Options", href: "/binary-option" },
                { label: "Trading Tools", href: "/tools" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gold">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-text-light">
                <HiMail className="mt-0.5 shrink-0 text-gold" />
                <span>contact@www.protradevision.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-card mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-light">
              &copy; {new Date().getFullYear()} ProTradeVision. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-text-light hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-text-light hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-6 p-4 bg-dark-card rounded-md border border-dark-card">
          <p className="text-xs text-text-light leading-relaxed">
            <strong className="text-warning">Risk Warning:</strong> Trading forex,
            cryptocurrencies, and binary options carries a high level of risk and
            may not be suitable for all investors. You could lose some or all of
            your invested capital. Never invest money you cannot afford to lose.
            The information on this website is for educational purposes only and
            does not constitute financial advice. Always conduct your own research
            before making any trading decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
