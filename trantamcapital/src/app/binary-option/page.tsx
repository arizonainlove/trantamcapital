import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BrokerCard from "@/components/BrokerCard";
import Card from "@/components/Card";
import { getAllBrokers } from "@/lib/content";
import { binaryComparisonFields, type Broker } from "@/data/brokers";

export const metadata: Metadata = {
  title: "Binary Options Platforms",
  description: "Explore binary options trading platforms. Expert reviews, risk warnings, and educational resources for binary options traders.",
};

function RatingBadge({ value }: { value?: string }) {
  if (!value) return <span className="text-text-secondary">—</span>;
  const isTop = value === "Excellent" || value === "Very Strong";
  const isHigh = value === "Strong" || value === "Long-established";
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

const steps = [
  { number: "01", title: "Choose an Asset", description: "Select the asset you want to trade — currency pairs, stocks, commodities, or cryptocurrencies." },
  { number: "02", title: "Set Expiry Time", description: "Choose how long your option will last — from 60 seconds to several hours or days." },
  { number: "03", title: "Predict Direction", description: "Predict whether the asset price will be higher or lower than the current price at expiry." },
  { number: "04", title: "Collect Profits", description: "If your prediction is correct, you receive a fixed payout (typically 70-95% of your investment)." },
];

export default function BinaryOption() {
  const platforms = getAllBrokers().filter((b) => b.type === "Binary Options");

  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Binary Options Platforms</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Expert reviews of binary options trading platforms
          </p>
        </div>
      </section>

      {/* Risk Warning — prominent warning before any platform listings */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="p-6 bg-error/5 border-2 border-error/40 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0 mt-0.5" aria-hidden="true">&#9888;&#65079;</span>
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-error uppercase tracking-wide">High Risk Warning</h3>
                <p className="text-sm text-text-primary leading-relaxed font-semibold">
                  Binary options trading carries an <span className="text-error">extremely high level of risk</span> and is not suitable for all investors.
                  Most retail traders lose money trading binary options. You could lose some or all of your invested capital
                  — potentially within minutes.
                </p>
                <div className="p-3 bg-error/5 border border-error/20 rounded text-sm text-text-secondary leading-relaxed">
                  <p className="font-semibold text-error mb-1">Regulatory Restrictions</p>
                  <p>
                    Binary options are <strong>banned or severely restricted</strong> for retail investors in the
                    European Union (ESMA), United Kingdom (FCA), Australia (ASIC), and Canada (CSA).
                    If you are a resident of these jurisdictions, you may not be able to legally trade binary options.
                  </p>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Never invest money you cannot afford to lose. Past performance does not guarantee future results.
                  Please ensure you fully understand the risks involved and seek independent financial advice if necessary.
                  The platforms listed on this page are for informational purposes only and do not constitute a recommendation
                  to trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Top Binary Options Platforms" subtitle="Compare leading binary options trading platforms" />
          {platforms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {platforms.map((platform) => (
                <BrokerCard key={platform.slug} {...platform} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-secondary py-8">No binary options platforms available.</p>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {platforms.length > 0 && (
        <section className="py-12 bg-section">
          <div className="max-w-[1200px] mx-auto px-4">
            <SectionTitle title="Platform Comparison" subtitle="Key features and ratings at a glance" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg border border-border">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="text-left py-3 px-4 font-semibold sticky left-0 z-10 bg-dark">Platform</th>
                    {binaryComparisonFields.map((f) => (
                      <th key={f.key} className="text-center py-3 px-4 font-semibold whitespace-nowrap">{f.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((row, i) => (
                    <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-section"}>
                      <td className={`py-3 px-4 font-semibold text-text-primary sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-section"}`}>
                        <Link href={row.reviewHref} className="hover:text-primary transition-colors">
                          {row.name}
                        </Link>
                      </td>
                      {binaryComparisonFields.map((f) => {
                        const val = (row as unknown as Record<string, string | undefined>)[f.key];
                        const isRatingField = ["popularity", "binaryCopyTrading", "cryptoSupport", "affiliateProgram"].includes(f.key);
                        return (
                          <td key={f.key} className="py-3 px-4 text-center text-text-secondary">
                            {isRatingField ? <RatingBadge value={val} /> : (val || "—")}
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

      {/* How Binary Options Work */}
      <section className="py-12 bg-section">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="How Binary Options Work" subtitle="Understanding the basics in 4 simple steps" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step) => (
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
      </section>
    </>
  );
}
