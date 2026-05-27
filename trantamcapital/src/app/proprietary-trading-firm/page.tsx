import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BrokerCard from "@/components/BrokerCard";
import Card from "@/components/Card";
import { getAllBrokers } from "@/lib/content";
import { propFirmComparisonFields, type Broker } from "@/data/brokers";

export const metadata: Metadata = {
  title: "Proprietary Trading Firm Reviews",
  description: "Compare top proprietary trading firms. Expert reviews on profit splits, evaluation fees, funding programs, and trading conditions.",
};

function RatingBadge({ value }: { value?: string }) {
  if (!value) return <span className="text-text-secondary">—</span>;
  const isTop = value === "Excellent" || value === "Very High" || value === "Very Strong";
  const isHigh = value === "Very Good" || value === "High" || value === "Strong";
  const isGood = value === "Good";
  const isMedium = value === "Medium";

  let className = "text-xs font-semibold px-2 py-1 rounded ";
  if (isTop) className += "bg-success/10 text-success";
  else if (isHigh) className += "bg-link/10 text-link";
  else if (isGood) className += "bg-primary-light text-primary";
  else if (isMedium) className += "bg-warning/10 text-warning";
  else className += "bg-text-light/10 text-text-light";

  return <span className={className}>{value}</span>;
}

export default function ProprietaryTradingFirm() {
  const firms = getAllBrokers().filter((b) => b.type === "Proprietary Trading Firm");

  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Proprietary Trading Firms</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Expert reviews and comparisons of top prop trading firms
          </p>
        </div>
      </section>

      {/* How Prop Trading Works */}
      <section className="py-12 bg-section">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="What Is a Proprietary Trading Firm?" subtitle="How prop firms fund traders with capital" />
          <div className="space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">
              A proprietary trading firm (prop firm) provides traders with access to significant trading capital
              in exchange for a share of the profits. Unlike traditional brokers, prop firms fund successful traders
              who pass an evaluation process, allowing them to trade with the firm&apos;s capital rather than their own.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { number: "01", title: "Choose a Firm", description: "Select a prop firm with terms that match your trading style — profit split, evaluation type, and instrument selection." },
                { number: "02", title: "Pass the Evaluation", description: "Trade a simulated account to meet profit targets while respecting daily loss limits and drawdown rules." },
                { number: "03", title: "Get Funded", description: "Once you pass, you receive access to a live funded account with the firm's capital." },
                { number: "04", title: "Earn Profits", description: "Keep the majority of your trading profits (typically 70-90%) while the firm covers the risk." },
              ].map((step) => (
                <Card key={step.number} className="relative pl-16">
                  <div className="absolute left-4 top-5 text-3xl font-extrabold text-primary/20">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Firms Grid */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Top Prop Trading Firms" subtitle="Compare the best proprietary trading firms" />
          {firms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {firms.map((firm) => (
                <BrokerCard key={firm.slug} {...firm} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-secondary py-8">No prop trading firms available.</p>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {firms.length > 0 && (
        <section className="py-12 bg-section">
          <div className="max-w-[1200px] mx-auto px-4">
            <SectionTitle title="Firm Comparison" subtitle="Key features and terms at a glance" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg border border-border">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="text-left py-3 px-4 font-semibold sticky left-0 z-10 bg-dark">Firm</th>
                    {propFirmComparisonFields.map((f) => (
                      <th key={f.key} className="text-center py-3 px-4 font-semibold whitespace-nowrap">{f.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {firms.map((row, i) => (
                    <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-section"}>
                      <td className={`py-3 px-4 font-semibold text-text-primary sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-section"}`}>
                        <Link href={row.reviewHref} className="hover:text-primary transition-colors">
                          {row.name}
                        </Link>
                      </td>
                      {propFirmComparisonFields.map((f) => {
                        const val = (row as unknown as Record<string, string | undefined>)[f.key];
                        return (
                          <td key={f.key} className="py-3 px-4 text-center text-text-secondary">
                            {val || "—"}
                          </td>
                        );
                      })}
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
          <SectionTitle title="How to Choose a Prop Firm" subtitle="Key factors to consider before joining" />
          <div className="space-y-4">
            {[
              { title: "1. Check the Profit Split", content: "Look for firms offering competitive profit splits (80% or higher for funded traders). Some firms increase your split after you hit certain profit milestones." },
              { title: "2. Understand the Evaluation", content: "One-phase evaluations are faster but may have stricter rules. Two-phase evaluations take longer but often have more forgiving parameters. Choose based on your trading style." },
              { title: "3. Review the Rules", content: "Pay close attention to daily loss limits, maximum drawdown, consistency rules, and trading period requirements. Violating these rules can result in account termination." },
              { title: "4. Check Available Instruments", content: "Ensure the firm offers the instruments you trade — forex, crypto, indices, commodities, or stocks. Some firms specialize in specific asset classes." },
              { title: "5. Read the Fine Print", content: "Review the refund policy, payout frequency, and any hidden fees. Reputable firms are transparent about their terms and have a track record of paying traders." },
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
