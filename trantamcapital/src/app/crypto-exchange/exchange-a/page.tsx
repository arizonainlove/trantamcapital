import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Breadcrumb from '@/components/Breadcrumb';
import NewsCard from "@/components/NewsCard";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Exchange A Review",
  description: "Detailed review of Exchange A â€” 500+ cryptocurrencies, low fees, futures trading, and strong security.",
};

const pros = ["500+ cryptocurrencies available", "Low trading fees (0.1%)", "Futures and margin trading", "Strong security track record", "High liquidity", "24/7 customer support"];
const cons = ["Complex for beginners", "Withdrawal fees can be high", "Not available in all countries"];

const relatedNews = [
  { category: "Cryptocurrency", date: "May 19, 2026", title: "Exchange A Adds 50 New Altcoins to Platform", excerpt: "Exchange A has expanded its offering with 50 new cryptocurrency listings, including several promising DeFi projects.", href: "/news", imageGradient: "linear-gradient(135deg, #F9A825 0%, #F57F17 100%)" },
  { category: "Cryptocurrency", date: "May 14, 2026", title: "Exchange A Launches Institutional Trading Desk", excerpt: "New institutional-grade trading desk with dedicated account managers and customized liquidity solutions.", href: "/news", imageGradient: "linear-gradient(135deg, #F9A825 0%, #F57F17 100%)" },
  { category: "Cryptocurrency", date: "May 9, 2026", title: "Top 5 Crypto Exchanges for Altcoin Trading", excerpt: "Our ranking of the best exchanges for altcoin trading, with Exchange A taking the top spot for variety.", href: "/news", imageGradient: "linear-gradient(135deg, #F9A825 0%, #F57F17 100%)" },
];

export default function ExchangeA() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Exchanges", href: "/crypto-exchange" }, { label: "Exchange A" }]} />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Exchange A</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">Crypto Exchange</span>
                <span className="text-text-light">|</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (<HiStar key={i} className={`text-sm ${i < 4 ? "text-gold" : "text-text-light/30"}`} />))}
                  <span className="text-sm text-text-light ml-1">4.7/5</span>
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
                  <p>Exchange A is one of the world's largest and most trusted cryptocurrency exchanges, offering over 500 cryptocurrencies for trading. With industry-leading security measures and deep liquidity, they serve both retail and institutional clients across the globe.</p>
                  <p>The exchange charges a competitive 0.1% trading fee and offers advanced trading features including futures, margin trading, and staking. Their security infrastructure includes cold storage for the majority of funds, two-factor authentication, and regular security audits.</p>
                </div>
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
                    { label: "Cryptocurrencies", value: "500+" },
                    { label: "Trading Fees", value: "0.1%" },
                    { label: "Security", value: "Very High" },
                    { label: "Features", value: "Spot, Futures, Margin, Staking" },
                    { label: "Mobile App", value: "iOS & Android" },
                    { label: "Customer Support", value: "24/7 Live Chat" },
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
                    { label: "Security", score: 9.5 },
                    { label: "Fees", score: 9.0 },
                    { label: "Coin Selection", score: 9.5 },
                    { label: "User Experience", score: 8.5 },
                    { label: "Customer Support", score: 8.5 },
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
                  <span className="text-sm text-text-primary font-semibold">Trust Score: 94/100</span>
                </div>
                <a href="#" className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center">Visit Exchange A</a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
