import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Breadcrumb from '@/components/Breadcrumb';
import NewsCard from "@/components/NewsCard";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "ForexBroker C Review",
  description: "Detailed review of ForexBroker C â€” FCA regulated with social trading and copy trading features.",
};

const pros = ["FCA regulated", "Social & copy trading", "Competitive spreads", "Low minimum deposit ($50)", "Excellent mobile app", "Negative balance protection"];
const cons = ["Limited leverage (1:30 max)", "Fewer currency pairs than competitors", "Withdrawal processing can be slow"];

const relatedNews = [
  { category: "Forex", date: "May 17, 2026", title: "ForexBroker C Enhances Copy Trading Platform", excerpt: "New updates to ForexBroker C's copy trading platform make it easier to follow top-performing traders.", href: "/news", imageGradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)" },
  { category: "Forex", date: "May 12, 2026", title: "Social Trading: The Future of Forex", excerpt: "How social trading platforms like ForexBroker C are changing the way beginners learn to trade.", href: "/news", imageGradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)" },
  { category: "Forex", date: "May 7, 2026", title: "FCA Regulation: Why It Matters", excerpt: "Why FCA regulation matters when choosing a forex broker and how it protects your funds.", href: "/news", imageGradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)" },
];

export default function BrokerC() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Forex Brokers", href: "/forex-broker" }, { label: "ForexBroker C" }]} />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">ForexBroker C</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">Forex Broker</span>
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
                  <p>ForexBroker C is a UK-based broker regulated by the Financial Conduct Authority (FCA). They stand out for their innovative social and copy trading features, making them an excellent choice for beginner and intermediate traders who want to learn from experienced professionals.</p>
                  <p>With a low minimum deposit of just $50 and competitive spreads starting from 0.8 pips, they offer great value. Their proprietary platform integrates seamlessly with copy trading functionality, allowing users to automatically replicate the trades of top-performing strategy managers.</p>
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
                    { label: "Regulation", value: "FCA" },
                    { label: "Min Deposit", value: "$50" },
                    { label: "Spread", value: "From 0.8 pips" },
                    { label: "Leverage", value: "Up to 1:30" },
                    { label: "Platforms", value: "Proprietary, MT4" },
                    { label: "Account Types", value: "Standard, Copy Trading, Islamic" },
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
                    { label: "Regulation & Safety", score: 9.5 },
                    { label: "Trading Platforms", score: 8.5 },
                    { label: "Spreads & Fees", score: 8.0 },
                    { label: "Customer Support", score: 8.5 },
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
                  <span className="text-sm text-text-primary font-semibold">Trust Score: 90/100</span>
                </div>
                <a href="#" className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center">Visit ForexBroker C</a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
