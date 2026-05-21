import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BrokerCard from "@/components/BrokerCard";
import { getAllBrokers } from "@/lib/content";
import { forexComparisonFields, type Broker } from "@/data/brokers";

export const metadata: Metadata = {
  title: "Forex Broker Reviews",
  description: "Compare top regulated forex brokers. Read expert reviews, compare spreads, leverage, and trading platforms.",
};

export default function ForexBroker() {
  const brokers = getAllBrokers().filter((b) => b.type === "Forex Broker");

  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Forex Broker Reviews</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Expert reviews and comparisons of top regulated forex brokers
          </p>
        </div>
      </section>

      {/* Brokers Grid */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Top Forex Brokers" subtitle="Compare the best forex brokers side by side" />
          {brokers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {brokers.map((broker) => (
                <BrokerCard key={broker.slug} {...broker} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-secondary py-8">No forex brokers available.</p>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {brokers.length > 0 && (
        <section className="py-12 bg-section">
          <div className="max-w-[1200px] mx-auto px-4">
            <SectionTitle title="Comparison Table" subtitle="Side-by-side comparison of key features" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg border border-border">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="text-left py-3 px-4 font-semibold sticky left-0 z-10 bg-dark">Broker</th>
                    {forexComparisonFields.map((f) => (
                      <th key={f.key} className="text-center py-3 px-4 font-semibold">{f.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {brokers.map((row, i) => (
                    <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-section"}>
                      <td className={`py-3 px-4 font-semibold text-text-primary sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-section"}`}>
                        {row.name}
                      </td>
                      {forexComparisonFields.map((f) => (
                        <td key={f.key} className="py-3 px-4 text-center text-text-secondary">
                          {(row as unknown as Record<string, string | undefined>)[f.key] || "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Guide */}
      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="How to Choose a Forex Broker" subtitle="Key factors to consider when selecting your broker" />
          <div className="space-y-4">
            {[
              { title: "1. Check Regulation", content: "Always verify that your broker is regulated by a reputable authority such as the FCA (UK), CySEC (Cyprus), or ASIC (Australia). Regulation provides investor protection and ensures the broker follows strict standards." },
              { title: "2. Compare Spreads and Fees", content: "Look for competitive spreads and transparent fee structures. ECN brokers typically offer the tightest spreads but charge commissions, while market makers offer fixed spreads with no commissions." },
              { title: "3. Evaluate Trading Platforms", content: "Ensure the broker offers platforms you're comfortable with. MetaTrader 4 and 5 are industry standards, but some brokers offer proprietary platforms with unique features." },
              { title: "4. Check Deposit and Withdrawal Options", content: "Look for brokers that offer convenient payment methods with fast withdrawal processing times. Be aware of any fees associated with deposits or withdrawals." },
              { title: "5. Test Customer Support", content: "Reliable customer support is crucial, especially for beginners. Test response times and availability before committing to a broker." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg border border-border bg-white">
                <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
