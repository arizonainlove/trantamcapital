import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Exchange B Review",
  description: "Detailed review of Exchange B — user-friendly interface, staking rewards, NFT marketplace, and institutional-grade security.",
};

const pros = ["Very user-friendly interface", "Staking rewards available", "Built-in NFT marketplace", "Institutional-grade security", "Excellent mobile app", "Educational resources for beginners"];
const cons = ["Higher fees than competitors (0.2%)", "Limited altcoin selection", "Futures not available in all regions"];

const relatedNews = [
  { category: "Cryptocurrency", date: "May 18, 2026", title: "Exchange B NFT Marketplace Hits $1B Volume", excerpt: "Exchange B's NFT marketplace has reached $1 billion in total trading volume since its launch.", href: "#", imageGradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)" },
  { category: "Cryptocurrency", date: "May 13, 2026", title: "Exchange B Increases Staking Rewards for ETH", excerpt: "Exchange B has announced increased staking rewards for Ethereum, offering 5.5% APY for ETH stakers.", href: "#", imageGradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)" },
  { category: "Cryptocurrency", date: "May 8, 2026", title: "Best Crypto Exchanges for Beginners", excerpt: "Our guide to the most beginner-friendly crypto exchanges, with Exchange B ranked #1 for ease of use.", href: "#", imageGradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)" },
];

export default function ExchangeB() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/crypto-exchange" className="text-sm text-text-light hover:text-primary mb-4 inline-block transition-colors">&larr; Back to Crypto Exchanges</Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Exchange B</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">Crypto Exchange</span>
                <span className="text-text-light">|</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (<HiStar key={i} className={`text-sm ${i < 4 ? "text-gold" : "text-text-light/30"}`} />))}
                  <span className="text-sm text-text-light ml-1">4.5/5</span>
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
                  <p>Exchange B is a user-friendly cryptocurrency exchange that has gained popularity for its intuitive interface and comprehensive features. Beyond basic trading, they offer staking rewards, a built-in NFT marketplace, and extensive educational resources.</p>
                  <p>The exchange prioritizes security with institutional-grade measures including cold storage, multi-signature wallets, and regular third-party security audits. While their fees are slightly higher than some competitors, the added features and ease of use make them an excellent choice for new and intermediate crypto traders.</p>
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
                      {cons.map((c) => (<li key={c} className="text-sm text-text-secondary flex items-start gap-2"><span className="text-error mt-0.5 shrink-0">✕</span><span>{c}</span></li>))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <SectionTitle title="Key Features" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Cryptocurrencies", value: "350+" },
                    { label: "Trading Fees", value: "0.2%" },
                    { label: "Security", value: "High" },
                    { label: "Features", value: "Spot, Staking, NFT" },
                    { label: "Mobile App", value: "iOS & Android" },
                    { label: "Customer Support", value: "24/7" },
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
                    { label: "Security", score: 9.0 },
                    { label: "Fees", score: 8.0 },
                    { label: "Coin Selection", score: 8.5 },
                    { label: "User Experience", score: 9.5 },
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
                  <span className="text-sm text-text-primary font-semibold">Trust Score: 86/100</span>
                </div>
                <a href="#" className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center">Visit Exchange B</a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
