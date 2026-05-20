import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Breadcrumb from '@/components/Breadcrumb';
import NewsCard from "@/components/NewsCard";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "BinaryPlatform A Review",
  description: "Detailed review of BinaryPlatform A â€” user-friendly binary options trading with multiple asset classes and demo account.",
};

const pros = ["Very user-friendly platform", "Multiple asset classes available", "Free demo account", "Fast withdrawals", "Competitive payouts up to 92%", "Educational resources"];
const cons = ["Limited expiry times", "Not available in all countries", "Higher minimum trade amount"];

const relatedNews = [
  { category: "Binary Options", date: "May 16, 2026", title: "BinaryPlatform A Launches New Asset Classes", excerpt: "BinaryPlatform A has expanded its offering with new asset classes including ETFs and major indices.", href: "/news", imageGradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)" },
  { category: "Binary Options", date: "May 11, 2026", title: "BinaryPlatform A Review: Updated for 2026", excerpt: "An updated comprehensive review of BinaryPlatform A covering new features, payout structures, and user experience.", href: "/news", imageGradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)" },
  { category: "Binary Options", date: "May 5, 2026", title: "Best Binary Options Platforms for Beginners", excerpt: "Our ranking of the best binary options platforms for new traders, highlighting BinaryPlatform A's excellent demo account.", href: "/news", imageGradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)" },
];

export default function PlatformA() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Binary Options", href: "/binary-option" }, { label: "Platform A" }]} />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">BinaryPlatform A</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">Binary Options</span>
                <span className="text-text-light">|</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (<HiStar key={i} className={`text-sm ${i < 4 ? "text-gold" : "text-text-light/30"}`} />))}
                  <span className="text-sm text-text-light ml-1">4.3/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionTitle title="Overview" />
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>BinaryPlatform A is a leading binary options trading platform known for its intuitive interface and comprehensive educational resources. They offer trading on multiple asset classes including currency pairs, stocks, commodities, and cryptocurrencies.</p>
                  <p>The platform provides competitive payouts of up to 92% and features a free demo account for beginners to practice their strategies. With fast withdrawal processing and responsive customer support, they have built a solid reputation in the binary options industry.</p>
                </div>
              </div>

              <div className="p-4 bg-warning/10 border border-warning/30 rounded-md">
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong className="text-warning">âš  Risk Warning:</strong> Binary options trading involves significant risk. You could lose your entire investment. Trade only with money you can afford to lose.
                </p>
              </div>

              <div>
                <SectionTitle title="Pros & Cons" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-success mb-3 flex items-center gap-2"><HiCheckCircle /> Pros</h4>
                    <ul className="space-y-2">
                      {pros.map((p) => (<li key={p} className="text-sm text-text-secondary flex items-start gap-2"><HiCheckCircle className="text-success mt-0.5 shrink-0" /><span>{p}</span></li>))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-error mb-3">Cons</h4>
                    <ul className="space-y-2">
                      {cons.map((c) => (<li key={c} className="text-sm text-text-secondary flex items-start gap-2"><span className="text-error mt-0.5 shrink-0">âœ•</span><span>{c}</span></li>))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <SectionTitle title="Key Features" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Asset Classes", value: "Forex, Stocks, Crypto, Commodities" },
                    { label: "Max Payout", value: "Up to 92%" },
                    { label: "Min Trade", value: "$10" },
                    { label: "Platform", value: "Web & Mobile" },
                    { label: "Demo Account", value: "Free (Virtual $10,000)" },
                    { label: "Withdrawal", value: "1-3 business days" },
                  ].map((f) => (
                    <div key={f.label} className="flex justify-between p-3 rounded bg-section">
                      <span className="text-sm font-semibold text-text-primary">{f.label}</span>
                      <span className="text-sm text-text-secondary">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Related Articles" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedNews.map((article) => (<NewsCard key={article.title} {...article} />))}
                </div>
              </div>
            </div>

            <div>
              <Card>
                <h3 className="text-lg font-bold text-text-primary mb-4">Rating Summary</h3>
                <div className="space-y-3 mb-5">
                  {[
                    { label: "Platform Usability", score: 9.0 },
                    { label: "Payouts", score: 8.5 },
                    { label: "Asset Selection", score: 8.0 },
                    { label: "Customer Support", score: 8.0 },
                    { label: "Education", score: 8.5 },
                  ].map((r) => (
                    <div key={r.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-secondary">{r.label}</span>
                        <span className="font-semibold text-text-primary">{r.score}/10</span>
                      </div>
                      <div className="h-2 bg-section rounded-full overflow-hidden">
                        <div className="h-full bg-gold rounded-full" style={{ width: `${r.score * 10}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 p-3 rounded bg-primary-light mb-5">
                  <HiShieldCheck className="text-primary shrink-0" />
                  <span className="text-sm text-text-primary font-semibold">Trust Score: 82/100</span>
                </div>
                <a href="#" className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center">Visit BinaryPlatform A</a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
