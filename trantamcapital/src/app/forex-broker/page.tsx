import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BrokerCard from "@/components/BrokerCard";

export const metadata: Metadata = {
  title: "Forex Broker Reviews",
  description: "Compare top regulated forex brokers. Read expert reviews, compare spreads, leverage, and trading platforms.",
};

const brokers = [
  {
    name: "ForexBroker A", type: "Forex Broker", rating: 4.8,
    features: ["FCA & CySEC regulated", "0.0 pip spreads", "MT4 & MT5 supported", "1:500 leverage"],
    reviewHref: "/forex-broker/broker-a", visitHref: "#",
    gradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
  },
  {
    name: "ForexBroker B", type: "Forex Broker", rating: 4.6,
    features: ["ASIC regulated", "Negative balance protection", "Free education", "24/7 support"],
    reviewHref: "/forex-broker/broker-b", visitHref: "#",
    gradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
  },
  {
    name: "ForexBroker C", type: "Forex Broker", rating: 4.5,
    features: ["FCA regulated", "Social trading", "Copy trading", "Competitive spreads"],
    reviewHref: "/forex-broker/broker-c", visitHref: "#",
    gradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)",
  },
  {
    name: "ForexBroker D", type: "Forex Broker", rating: 4.4,
    features: ["CySEC regulated", "Islamic accounts", "PAMM accounts", "Low minimum deposit"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)",
  },
  {
    name: "ForexBroker E", type: "Forex Broker", rating: 4.3,
    features: ["FSA regulated", "Crypto CFDs available", "EA compatible", "Competitive commissions"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)",
  },
  {
    name: "ForexBroker F", type: "Forex Broker", rating: 4.2,
    features: [" offshore regulated", "High leverage 1:1000", "Instant withdrawals", "Multi-language support"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
  },
];

const comparisonData = [
  { name: "ForexBroker A", regulation: "FCA, CySEC", minDeposit: "$100", spread: "0.0 pips", leverage: "1:500", platforms: "MT4, MT5, cTrader" },
  { name: "ForexBroker B", regulation: "ASIC", minDeposit: "$200", spread: "0.5 pips", leverage: "1:500", platforms: "MT4, MT5" },
  { name: "ForexBroker C", regulation: "FCA", minDeposit: "$50", spread: "0.8 pips", leverage: "1:30", platforms: "MT4, MT5, WebTrader" },
  { name: "ForexBroker D", regulation: "CySEC", minDeposit: "$100", spread: "1.0 pips", leverage: "1:200", platforms: "MT4, MT5" },
  { name: "ForexBroker E", regulation: "FSA", minDeposit: "$10", spread: "1.2 pips", leverage: "1:1000", platforms: "MT4, WebTrader" },
  { name: "ForexBroker F", regulation: "Offshore", minDeposit: "$50", spread: "1.5 pips", leverage: "1:1000", platforms: "MT4, Mobile App" },
];

export default function ForexBroker() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brokers.map((broker) => (
              <BrokerCard key={broker.name} {...broker} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-section">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Comparison Table" subtitle="Side-by-side comparison of key features" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-border">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="text-left py-3 px-4 font-semibold">Broker</th>
                  <th className="text-left py-3 px-4 font-semibold">Regulation</th>
                  <th className="text-center py-3 px-4 font-semibold">Min Deposit</th>
                  <th className="text-center py-3 px-4 font-semibold">Spread</th>
                  <th className="text-center py-3 px-4 font-semibold">Leverage</th>
                  <th className="text-left py-3 px-4 font-semibold">Platforms</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-section"}>
                    <td className="py-3 px-4 font-semibold text-text-primary">{row.name}</td>
                    <td className="py-3 px-4 text-text-secondary">{row.regulation}</td>
                    <td className="py-3 px-4 text-center text-text-secondary">{row.minDeposit}</td>
                    <td className="py-3 px-4 text-center text-text-secondary">{row.spread}</td>
                    <td className="py-3 px-4 text-center text-text-secondary">{row.leverage}</td>
                    <td className="py-3 px-4 text-text-secondary">{row.platforms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
