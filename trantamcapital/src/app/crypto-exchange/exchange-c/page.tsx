import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Exchange C Review",
  description: "Detailed review of Exchange C — regulated in EU and Asia, advanced charting tools, OTC trading desk, and cold storage security.",
};

const pros = ["Regulated in EU and Asia", "Advanced charting tools", "OTC trading desk for large orders", "Cold storage assets", "Competitive fees (0.15%)", "Professional trading interface"];
const cons = ["Smaller coin selection (200+)", "Not ideal for absolute beginners", "Higher minimum deposit for OTC"];

const relatedNews = [
  { category: "Cryptocurrency", date: "May 16, 2026", title: "Exchange C Receives New Regulatory License in Singapore", excerpt: "Exchange C has obtained a Major Payment Institution license from the Monetary Authority of Singapore.", href: "/news/exchange-c-license", imageGradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)" },
  { category: "Cryptocurrency", date: "May 11, 2026", title: "Exchange C Launches Advanced Trading Suite", excerpt: "New professional trading suite with advanced charting, real-time data, and algorithmic trading support.", href: "/news/exchange-c-suite", imageGradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)" },
  { category: "Cryptocurrency", date: "May 6, 2026", title: "OTC Trading: A Guide for Large Investors", excerpt: "How OTC desks like Exchange C's help large investors execute trades without impacting market prices.", href: "/news/otc-trading", imageGradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)" },
];

export default function ExchangeC() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/crypto-exchange" className="text-sm text-text-light hover:text-primary mb-4 inline-block transition-colors">&larr; Back to Crypto Exchanges</Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Exchange C</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">Crypto Exchange</span>
                <span className="text-text-light">|</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (<HiStar key={i} className={`text-sm ${i < 4 ? "text-gold" : "text-text-light/30"}`} />))}
                  <span className="text-sm text-text-light ml-1">4.4/5</span>
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
                  <p>Exchange C is a regulated cryptocurrency exchange operating in both Europe and Asia. They cater primarily to intermediate and professional traders with their advanced charting tools, OTC trading desk, and comprehensive trading features.</p>
                  <p>The exchange offers competitive fees at 0.15% and maintains a strong focus on security with cold storage for the majority of client assets. Their OTC desk is particularly popular among high-volume traders looking to execute large orders without slippage.</p>
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
                    { label: "Cryptocurrencies", value: "200+" },
                    { label: "Trading Fees", value: "0.15%" },
                    { label: "Security", value: "Very High" },
                    { label: "Features", value: "Spot, OTC, Margin" },
                    { label: "Mobile App", value: "iOS & Android" },
                    { label: "Customer Support", value: "24/7 Email & Chat" },
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
                    { label: "Coin Selection", score: 8.0 },
                    { label: "User Experience", score: 8.0 },
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
                  <span className="text-sm text-text-primary font-semibold">Trust Score: 88/100</span>
                </div>
                <a href="#" className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center">Visit Exchange C</a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
