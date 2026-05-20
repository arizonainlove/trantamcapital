import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "ForexBroker B Review",
  description: "Detailed review of ForexBroker B — ASIC regulated, competitive spreads, and excellent educational resources.",
};

const pros = ["ASIC regulated", "Negative balance protection", "Excellent educational resources", "User-friendly platforms", "Fast execution speeds", "No deposit fees"];
const cons = ["Limited leverage (1:30 for retail)", "No cryptocurrency trading", "Withdrawal fees after first monthly withdrawal"];

const relatedNews = [
  { category: "Forex", date: "May 18, 2026", title: "ForexBroker B Launches New Educational Platform", excerpt: "ForexBroker B has unveiled a comprehensive educational platform with video courses, webinars, and interactive quizzes.", href: "#", imageGradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)" },
  { category: "Forex", date: "May 14, 2026", title: "Best Forex Brokers for Beginners in 2026", excerpt: "Our guide to the best brokers for new traders, featuring ForexBroker B's excellent educational resources.", href: "#", imageGradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)" },
  { category: "Forex", date: "May 9, 2026", title: "ASIC Regulation: What It Means for Traders", excerpt: "Understanding ASIC regulation and how it protects traders when using brokers like ForexBroker B.", href: "#", imageGradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)" },
];

export default function BrokerB() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/forex-broker" className="text-sm text-text-light hover:text-primary mb-4 inline-block transition-colors">&larr; Back to Forex Brokers</Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-success to-green-800 flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">ForexBroker B</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">Forex Broker</span>
                <span className="text-text-light">|</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (<HiStar key={i} className={`text-sm ${i < 4 ? "text-gold" : "text-text-light/30"}`} />))}
                  <span className="text-sm text-text-light ml-1">4.6/5</span>
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
                  <p>ForexBroker B is an Australian-based broker regulated by the Australian Securities and Investments Commission (ASIC). Known for their exceptional educational resources and user-friendly platforms, they are an excellent choice for beginner to intermediate traders.</p>
                  <p>The broker offers competitive spreads starting from 0.5 pips and provides negative balance protection, ensuring traders never lose more than their deposit. Their proprietary platform is intuitive, while also supporting MetaTrader 4 and 5 for more experienced traders.</p>
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
                    { label: "Regulation", value: "ASIC" },
                    { label: "Min Deposit", value: "$200" },
                    { label: "Spread", value: "From 0.5 pips" },
                    { label: "Leverage", value: "Up to 1:30 (retail)" },
                    { label: "Platforms", value: "MT4, MT5, Proprietary" },
                    { label: "Account Types", value: "Standard, Premium, Islamic" },
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
                    { label: "Regulation & Safety", score: 9.0 },
                    { label: "Trading Platforms", score: 8.5 },
                    { label: "Spreads & Fees", score: 8.5 },
                    { label: "Customer Support", score: 9.0 },
                    { label: "Education", score: 9.5 },
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
                <a href="#" className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center">Visit ForexBroker B</a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
