import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BrokerCard from "@/components/BrokerCard";

export const metadata: Metadata = {
  title: "Crypto Exchange Reviews",
  description: "Compare top cryptocurrency exchanges. Read expert reviews on fees, security, features, and trading experience.",
};

const exchanges = [
  {
    name: "Exchange A", type: "Crypto Exchange", rating: 4.7,
    features: ["500+ cryptocurrencies", "Low fees 0.1%", "Futures & margin", "Security track record"],
    reviewHref: "/crypto-exchange/exchange-a", visitHref: "#",
    gradient: "linear-gradient(135deg, #F9A825 0%, #F57F17 100%)",
  },
  {
    name: "Exchange B", type: "Crypto Exchange", rating: 4.5,
    features: ["User-friendly interface", "Staking rewards", "NFT marketplace", "Institutional security"],
    reviewHref: "/crypto-exchange/exchange-b", visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
  },
  {
    name: "Exchange C", type: "Crypto Exchange", rating: 4.4,
    features: ["Regulated EU & Asia", "Advanced charting", "OTC trading desk", "Cold storage assets"],
    reviewHref: "/crypto-exchange/exchange-c", visitHref: "#",
    gradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)",
  },
  {
    name: "Exchange D", type: "Crypto Exchange", rating: 4.3,
    features: ["Decentralized exchange", "Self-custody funds", "Low gas fees", "Cross-chain swaps"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)",
  },
  {
    name: "Exchange E", type: "Crypto Exchange", rating: 4.2,
    features: ["Beginner friendly", "Recurring buys", "Educational content", "24/7 support"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
  },
  {
    name: "Exchange F", type: "Crypto Exchange", rating: 4.1,
    features: ["Copy trading", "Low futures fees", "API trading", "Active community"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
  },
];

const comparisonData = [
  { name: "Exchange A", fees: "0.1%", security: "Very High", features: "Spot, Futures, Margin", coins: "500+" },
  { name: "Exchange B", fees: "0.2%", security: "High", features: "Spot, Staking, NFT", coins: "350+" },
  { name: "Exchange C", fees: "0.15%", security: "Very High", features: "Spot, OTC, Margin", coins: "200+" },
  { name: "Exchange D", fees: "0.3%", security: "High", features: "DEX, Swaps", coins: "100+" },
  { name: "Exchange E", fees: "0.5%", security: "High", features: "Spot, Recurring", coins: "50+" },
  { name: "Exchange F", fees: "0.02%", security: "Medium", features: "Futures, Copy", coins: "150+" },
];

export default function CryptoExchange() {
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

      {/* Exchanges Grid */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Top Crypto Exchanges" subtitle="Find the best platform for your trading needs" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exchanges.map((exchange) => (
              <BrokerCard key={exchange.name} {...exchange} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-section">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Exchange Comparison" subtitle="Key features at a glance" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-border">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="text-left py-3 px-4 font-semibold">Exchange</th>
                  <th className="text-center py-3 px-4 font-semibold">Trading Fees</th>
                  <th className="text-center py-3 px-4 font-semibold">Security</th>
                  <th className="text-left py-3 px-4 font-semibold">Features</th>
                  <th className="text-center py-3 px-4 font-semibold">Coins</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-section"}>
                    <td className="py-3 px-4 font-semibold text-text-primary">{row.name}</td>
                    <td className="py-3 px-4 text-center text-text-secondary">{row.fees}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        row.security === "Very High" ? "bg-success/10 text-success" :
                        row.security === "High" ? "bg-link/10 text-link" :
                        "bg-warning/10 text-warning"
                      }`}>
                        {row.security}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text-secondary">{row.features}</td>
                    <td className="py-3 px-4 text-center text-text-secondary">{row.coins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
