import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Investment Analysis",
  description: "Professional market analysis, technical tools, and investment insights for forex, crypto, and binary options traders.",
};

const marketCards = [
  {
    title: "Cryptocurrency Markets",
    description: "Bitcoin dominance at 52% as altcoins show mixed signals. Total market cap holds above $4T with increasing institutional inflow.",
    gradient: "from-primary to-primary-hover",
    label: "BTC $102,450",
  },
  {
    title: "Forex Markets",
    description: "DXY consolidates near 104.50 as Fed maintains hawkish stance. EUR/USD tests 1.0800 support with ECB decision ahead.",
    gradient: "from-link to-blue-800",
    label: "DXY 104.50",
  },
  {
    title: "Commodities",
    description: "Gold holds above $2,400 amid geopolitical tensions. Oil prices stabilize after OPEC+ maintains production cuts.",
    gradient: "from-gold to-yellow-800",
    label: "Gold $2,420",
  },
];

const reportSections = [
  { title: "Market Sentiment", content: "Overall market sentiment remains cautiously optimistic. The Crypto Fear & Greed Index sits at 68 (Greed), suggesting continued investor confidence but approaching overbought territory." },
  { title: "Key Economic Events", content: "This week's calendar includes U.S. GDP revision, Eurozone CPI data, and Bank of England rate decision. These events are expected to drive significant volatility across major currency pairs." },
  { title: "Technical Outlook", content: "Bitcoin is showing bullish flag pattern on the daily timeframe, with support at $95,000 and resistance at $105,000. A breakout above $105K could trigger the next leg up toward $120,000." },
  { title: "Risk Assessment", content: "Traders should monitor geopolitical developments and central bank rhetoric. Position sizing and stop-loss orders are crucial given the current elevated volatility levels." },
];

const tools = [
  { title: "Moving Averages", description: "Identify trend direction and potential support/resistance levels using SMA and EMA indicators." },
  { title: "RSI (Relative Strength Index)", description: "Measure the speed and change of price movements to identify overbought or oversold conditions." },
  { title: "MACD", description: "Track trend direction, momentum, and potential reversals using moving average convergence divergence." },
  { title: "Bollinger Bands", description: "Analyze price volatility and identify potential breakout or reversal points with volatility bands." },
  { title: "Fibonacci Retracements", description: "Identify potential support and resistance levels based on key Fibonacci ratios in price movements." },
  { title: "Volume Analysis", description: "Confirm price movements and identify potential reversals by analyzing trading volume patterns." },
];

export default function InvestmentAnalysis() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Investment Analysis</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Professional market analysis and trading insights
          </p>
        </div>
      </section>

      {/* Market Overview Cards */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Market Overview" subtitle="Current market conditions across major asset classes" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketCards.map((card) => (
              <Card key={card.title}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-lg">{card.title.charAt(0)}</span>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-text-primary">{card.title}</h3>
                  <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-1 rounded">{card.label}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Market Report */}
      <section className="py-12 bg-section">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="Today&apos;s Market Report" subtitle="Daily analysis and market commentary" />
          <div className="space-y-6">
            {reportSections.map((section) => (
              <div key={section.title} className="p-5 rounded-lg border border-border bg-white">
                <h3 className="text-lg font-bold text-text-primary mb-2">{section.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Analysis Tools */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Technical Analysis Tools" subtitle="Essential tools for market analysis" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <Card key={tool.title}>
                <h3 className="text-lg font-bold text-text-primary mb-2">{tool.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
