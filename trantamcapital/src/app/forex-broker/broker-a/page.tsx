import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "ForexBroker A Review",
  description: "Detailed review of ForexBroker A — regulation, spreads, leverage, platforms, and features. Read our expert analysis.",
};

const pros = ["FCA & CySEC regulated", "0.0 pip spreads on major pairs", "MT4, MT5, and cTrader support", "1:500 leverage available", "Negative balance protection", "24/7 multilingual support"];
const cons = ["Higher commission on ECN accounts", "No cryptocurrency trading", "Inactivity fee after 6 months"];

const relatedNews = [
  { category: "Forex", date: "May 19, 2026", title: "ForexBroker A Introduces New Trading Tools Suite", excerpt: "ForexBroker A has launched a comprehensive suite of trading tools including advanced charting and risk management features.", href: "#", imageGradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)" },
  { category: "Forex", date: "May 15, 2026", title: "ForexBroker A Review: Six Months Later", excerpt: "An updated look at ForexBroker A after six months of real-world trading experience with the platform.", href: "#", imageGradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)" },
  { category: "Forex", date: "May 10, 2026", title: "Top 5 Forex Brokers for Scalping in 2026", excerpt: "We rank the best brokers for scalping strategies, with ForexBroker A taking the top spot for tight spreads.", href: "#", imageGradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)" },
];

export default function BrokerA() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link href="/forex-broker" className="text-sm text-text-light hover:text-primary mb-4 inline-block transition-colors">
            &larr; Back to Forex Brokers
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-link to-blue-800 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">ForexBroker A</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">Forex Broker</span>
                <span className="text-text-light">|</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <HiStar key={i} className={`text-sm ${i < 4 ? "text-gold" : "text-text-light/30"}`} />
                  ))}
                  <span className="text-sm text-text-light ml-1">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Review */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <SectionTitle title="Overview" />
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    ForexBroker A is a well-established forex broker regulated by both the Financial
                    Conduct Authority (FCA) in the UK and the Cyprus Securities and Exchange Commission
                    (CySEC). With over a decade of operation, they have built a reputation for
                    reliability, competitive pricing, and excellent customer service.
                  </p>
                  <p>
                    The broker offers tight spreads starting from 0.0 pips on ECN accounts, making
                    them an excellent choice for scalpers and high-volume traders. They support the
                    industry-standard MetaTrader 4 and 5 platforms, as well as cTrader for those
                    seeking advanced charting capabilities.
                  </p>
                </div>
              </div>

              {/* Pros & Cons */}
              <div>
                <SectionTitle title="Pros & Cons" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-success mb-3 flex items-center gap-2">
                      <HiCheckCircle /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {pros.map((p) => (
                        <li key={p} className="text-sm text-text-secondary flex items-start gap-2">
                          <HiCheckCircle className="text-success mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-error mb-3">Cons</h4>
                    <ul className="space-y-2">
                      {cons.map((c) => (
                        <li key={c} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-error mt-0.5 shrink-0">✕</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <SectionTitle title="Key Features" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Regulation", value: "FCA, CySEC" },
                    { label: "Min Deposit", value: "$100" },
                    { label: "Spread", value: "From 0.0 pips" },
                    { label: "Leverage", value: "Up to 1:500" },
                    { label: "Platforms", value: "MT4, MT5, cTrader" },
                    { label: "Account Types", value: "Standard, ECN, Islamic" },
                  ].map((f) => (
                    <div key={f.label} className="flex justify-between p-3 rounded bg-section">
                      <span className="text-sm font-semibold text-text-primary">{f.label}</span>
                      <span className="text-sm text-text-secondary">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related News */}
              <div>
                <SectionTitle title="Related Articles" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedNews.map((article) => (
                    <NewsCard key={article.title} {...article} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card>
                <h3 className="text-lg font-bold text-text-primary mb-4">Rating Summary</h3>
                <div className="space-y-3 mb-5">
                  {[
                    { label: "Regulation & Safety", score: 9.5 },
                    { label: "Trading Platforms", score: 9.0 },
                    { label: "Spreads & Fees", score: 9.5 },
                    { label: "Customer Support", score: 8.5 },
                    { label: "Education", score: 8.0 },
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
                  <span className="text-sm text-text-primary font-semibold">Trust Score: 92/100</span>
                </div>
                <a
                  href="#"
                  className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Visit ForexBroker A
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
