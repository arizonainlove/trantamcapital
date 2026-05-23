import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "For Beginners",
  description: "New to trading? Learn the basics of forex, cryptocurrency, and binary options with our beginner-friendly guides.",
};

const introCards = [
  {
    title: "What is Cryptocurrency?",
    description: "Digital or virtual currency that uses cryptography for security. Cryptocurrencies operate on decentralized networks based on blockchain technology, making them resistant to government interference or manipulation.",
    gradient: "from-primary to-primary-hover",
    newsCategory: "Cryptocurrency",
  },
  {
    title: "What is Forex Trading?",
    description: "The foreign exchange (forex) market is the global marketplace for trading national currencies. With $7.5 trillion in daily volume, it's the largest and most liquid financial market in the world.",
    gradient: "from-link to-blue-800",
    newsCategory: "Forex",
  },
  {
    title: "What are Binary Options?",
    description: "Binary options are financial instruments that allow you to speculate on the price movement of an asset. You predict whether the price will be above or below a certain level at a specific time.",
    gradient: "from-gold to-yellow-800",
    newsCategory: "Binary+Options",
  },
];

const steps = [
  { number: "01", title: "Choose Your Market", description: "Decide whether you want to trade forex, cryptocurrencies, or binary options based on your risk tolerance and interests." },
  { number: "02", title: "Select a Broker", description: "Research and choose a regulated broker that offers the instruments you want to trade with competitive fees and reliable support." },
  { number: "03", title: "Open an Account", description: "Sign up with your chosen broker, complete the verification process, and fund your trading account." },
  { number: "04", title: "Learn the Basics", description: "Study market analysis, trading strategies, risk management, and platform features before placing your first trade." },
  { number: "05", title: "Start with a Demo", description: "Practice trading with a demo account using virtual funds to build confidence and test your strategies risk-free." },
  { number: "06", title: "Develop a Strategy", description: "Create a trading plan with clear entry and exit rules, risk management parameters, and realistic profit targets." },
  { number: "07", title: "Go Live", description: "Start trading with real money, starting small and gradually increasing your position sizes as you gain experience." },
];

const glossary = [
  { term: "Ask Price", definition: "The lowest price a seller is willing to accept for an asset." },
  { term: "Bid Price", definition: "The highest price a buyer is willing to pay for an asset." },
  { term: "Spread", definition: "The difference between the ask price and the bid price." },
  { term: "Leverage", definition: "Using borrowed capital to increase the potential return of an investment." },
  { term: "Margin", definition: "The amount of money required to open and maintain a leveraged position." },
  { term: "Pip", definition: "The smallest price movement in a currency pair, typically 0.0001 for most pairs." },
  { term: "Volatility", definition: "The rate at which the price of an asset increases or decreases over time." },
  { term: "Liquidity", definition: "The ease with which an asset can be bought or sold without affecting its price." },
  { term: "Bull Market", definition: "A market condition where prices are rising or expected to rise." },
  { term: "Bear Market", definition: "A market condition where prices are falling or expected to fall." },
  { term: "Stop Loss", definition: "An order placed to automatically sell an asset when it reaches a specific price to limit losses." },
  { term: "Take Profit", definition: "An order placed to automatically sell an asset when it reaches a specific profit target." },
  { term: "Diversification", definition: "Spreading investments across different assets to reduce risk." },
  { term: "Technical Analysis", definition: "Analyzing price charts and market data to forecast future price movements." },
  { term: "Fundamental Analysis", definition: "Evaluating economic factors and news events to determine an asset's intrinsic value." },
];

export default function ForBeginners() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">For Beginners</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Start your trading journey with our comprehensive beginner guides
          </p>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Understanding the Markets" subtitle="Learn the fundamentals of each market type" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {introCards.map((card) => (
              <Card key={card.title} className="text-center">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{card.title.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">{card.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{card.description}</p>
                <Link
                  href={`/news?category=${card.newsCategory}`}
                  className="inline-block text-sm font-bold text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded min-h-[44px] transition-colors"
                >
                  Read {card.newsCategory === "Binary+Options" ? "Binary Options" : card.newsCategory} News
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-12 bg-section">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Start Trading in 7 Steps" subtitle="Your roadmap to becoming a confident trader" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Glossary */}
      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="Trading Glossary" subtitle="Essential trading terms every beginner should know" />
          <div className="space-y-3">
            {glossary.map((item) => (
              <div key={item.term} className="flex gap-4 p-4 rounded-lg border border-border bg-white">
                <dt className="font-bold text-text-primary text-sm min-w-[130px] shrink-0">{item.term}</dt>
                <dd className="text-sm text-text-secondary">{item.definition}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
