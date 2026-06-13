import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BrokerCard from "@/components/BrokerCard";
import GuidesSection from "@/components/GuidesSection";
import { getAllBrokers, getGuidesByPlatform } from "@/lib/content";
import { cryptoComparisonFields, type Broker } from "@/data/brokers";

export const metadata: Metadata = {
  title: "Crypto Exchange Reviews",
  description: "Compare top cryptocurrency exchanges. Read expert reviews, guides, and comparisons on fees, security, features, and trading experience.",
};

function RatingBadge({ value }: { value?: string }) {
  if (!value) return <span className="text-text-secondary">—</span>;
  const isTop = value === "Excellent" || value === "Very High" || value === "Very Strong";
  const isHigh = value === "Strong" || value === "High";
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

export default function CryptoExchange() {
  const exchanges = getAllBrokers().filter((b) => b.type === "Crypto Exchange");
  const guides = getGuidesByPlatform("crypto-exchange");

  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Crypto Exchange Reviews</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Expert reviews and comparisons of leading cryptocurrency exchanges
          </p>
        </div>
      </section>

      {/* Guides + Brokers Sidebar */}
      {guides.length > 0 && (
        <GuidesSection guides={guides} brokers={exchanges} />
      )}

      {/* Exchanges Grid */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Top Crypto Exchanges" subtitle="Find the best platform for your trading needs" />
          {exchanges.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {exchanges.map((exchange) => (
                <BrokerCard key={exchange.slug} {...exchange} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-secondary py-8">No crypto exchanges available.</p>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {exchanges.length > 0 && (
        <section id="exchange-comparison" className="py-12 bg-section">
          <div className="max-w-[1200px] mx-auto px-4">
            <SectionTitle title="Exchange Comparison" subtitle="Key features and ratings at a glance" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg border border-border">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="text-left py-3 px-4 font-semibold sticky left-0 z-10 bg-dark">Exchange</th>
                    {cryptoComparisonFields.map((f) => (
                      <th key={f.key} className="text-center py-3 px-4 font-semibold whitespace-nowrap">{f.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {exchanges.map((row, i) => (
                    <tr key={row.slug} className={i % 2 === 0 ? "bg-white" : "bg-section"}>
                      <td className={`py-3 px-4 font-semibold text-text-primary sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-section"}`}>
                        <Link href={row.reviewHref} className="hover:text-primary transition-colors">
                          {row.name}
                        </Link>
                      </td>
                      {cryptoComparisonFields.map((f) => {
                        const val = (row as unknown as Record<string, string | undefined>)[f.key];
                        const isRatingField = ["security", "futures", "spot", "copyTrading", "web3", "affiliateProgram"].includes(f.key);
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
    </>
  );
}
