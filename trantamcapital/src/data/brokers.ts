export interface Broker {
  slug: string;
  name: string;
  type: "Forex Broker" | "Crypto Exchange" | "Binary Options";
  rating: number;
  features: string[];
  reviewHref: string;
  visitHref: string;
  logo?: string;
  gradient?: string;
  // Comparison fields — type-specific, used in auto comparison tables
  regulation?: string;
  minDeposit?: string;
  spread?: string;
  leverage?: string;
  platforms?: string;
  tradingFees?: string;
  security?: string;
  exchangeFeatures?: string;
  coins?: string;
  payout?: string;
  expiryTypes?: string;
  assets?: string;
}

const defaultBrokers: Omit<Broker, "slug">[] = [
  // ── Forex Brokers ──
  {
    name: "ForexBroker A", type: "Forex Broker", rating: 4.8,
    features: ["Regulated by FCA & CySEC", "0.0 pip spreads", "MT4 & MT5 supported", "1:500 leverage"],
    reviewHref: "/forex-broker/broker-a", visitHref: "#",
    gradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
    regulation: "FCA, CySEC", minDeposit: "$100", spread: "0.0 pips", leverage: "1:500", platforms: "MT4, MT5, cTrader",
  },
  {
    name: "ForexBroker B", type: "Forex Broker", rating: 4.6,
    features: ["ASIC regulated", "Negative balance protection", "Free education", "24/7 support"],
    reviewHref: "/forex-broker/broker-b", visitHref: "#",
    gradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
    regulation: "ASIC", minDeposit: "$200", spread: "0.5 pips", leverage: "1:500", platforms: "MT4, MT5",
  },
  {
    name: "ForexBroker C", type: "Forex Broker", rating: 4.5,
    features: ["FCA regulated", "Social trading", "Copy trading", "Competitive spreads"],
    reviewHref: "/forex-broker/broker-c", visitHref: "#",
    gradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)",
    regulation: "FCA", minDeposit: "$50", spread: "0.8 pips", leverage: "1:30", platforms: "MT4, MT5, WebTrader",
  },
  {
    name: "ForexBroker D", type: "Forex Broker", rating: 4.4,
    features: ["CySEC regulated", "Islamic accounts", "PAMM accounts", "Low minimum deposit"],
    reviewHref: "/forex-broker/broker-d", visitHref: "#",
    gradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)",
    regulation: "CySEC", minDeposit: "$100", spread: "1.0 pips", leverage: "1:200", platforms: "MT4, MT5",
  },
  {
    name: "ForexBroker E", type: "Forex Broker", rating: 4.3,
    features: ["FSA regulated", "Crypto CFDs available", "EA compatible", "Competitive commissions"],
    reviewHref: "/forex-broker/broker-e", visitHref: "#",
    gradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)",
    regulation: "FSA", minDeposit: "$10", spread: "1.2 pips", leverage: "1:1000", platforms: "MT4, WebTrader",
  },
  {
    name: "ForexBroker F", type: "Forex Broker", rating: 4.2,
    features: ["Offshore regulated", "High leverage 1:1000", "Instant withdrawals", "Multi-language support"],
    reviewHref: "/forex-broker/broker-f", visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
    regulation: "Offshore", minDeposit: "$50", spread: "1.5 pips", leverage: "1:1000", platforms: "MT4, Mobile App",
  },

  // ── Crypto Exchanges ──
  {
    name: "Exchange A", type: "Crypto Exchange", rating: 4.7,
    features: ["500+ cryptocurrencies", "Low fees 0.1%", "Futures & margin", "Security track record"],
    reviewHref: "/crypto-exchange/exchange-a", visitHref: "#",
    gradient: "linear-gradient(135deg, #F9A825 0%, #F57F17 100%)",
    tradingFees: "0.1%", security: "Very High", exchangeFeatures: "Spot, Futures, Margin", coins: "500+",
  },
  {
    name: "Exchange B", type: "Crypto Exchange", rating: 4.5,
    features: ["User-friendly interface", "Staking rewards", "NFT marketplace", "Institutional security"],
    reviewHref: "/crypto-exchange/exchange-b", visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
    tradingFees: "0.2%", security: "High", exchangeFeatures: "Spot, Staking, NFT", coins: "350+",
  },
  {
    name: "Exchange C", type: "Crypto Exchange", rating: 4.4,
    features: ["Regulated EU & Asia", "Advanced charting", "OTC trading desk", "Cold storage assets"],
    reviewHref: "/crypto-exchange/exchange-c", visitHref: "#",
    gradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)",
    tradingFees: "0.15%", security: "Very High", exchangeFeatures: "Spot, OTC, Margin", coins: "200+",
  },
  {
    name: "Exchange D", type: "Crypto Exchange", rating: 4.3,
    features: ["Decentralized exchange", "Self-custody funds", "Low gas fees", "Cross-chain swaps"],
    reviewHref: "/crypto-exchange/exchange-d", visitHref: "#",
    gradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)",
    tradingFees: "0.3%", security: "High", exchangeFeatures: "DEX, Swaps", coins: "100+",
  },
  {
    name: "Exchange E", type: "Crypto Exchange", rating: 4.2,
    features: ["Beginner friendly", "Recurring buys", "Educational content", "24/7 support"],
    reviewHref: "/crypto-exchange/exchange-e", visitHref: "#",
    gradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
    tradingFees: "0.5%", security: "High", exchangeFeatures: "Spot, Recurring", coins: "50+",
  },
  {
    name: "Exchange F", type: "Crypto Exchange", rating: 4.1,
    features: ["Copy trading", "Low futures fees", "API trading", "Active community"],
    reviewHref: "/crypto-exchange/exchange-f", visitHref: "#",
    gradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
    tradingFees: "0.02%", security: "Medium", exchangeFeatures: "Futures, Copy", coins: "150+",
  },

  // ── Binary Options Platforms ──
  {
    name: "BinaryPlatform A", type: "Binary Options", rating: 4.3,
    features: ["User-friendly platform", "Multiple asset classes", "Demo account available", "Fast withdrawals"],
    reviewHref: "/binary-option/platform-a", visitHref: "#",
    gradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)",
    payout: "Up to 92%", expiryTypes: "60s — End of Day", assets: "Forex, Stocks, Crypto, Commodities",
  },
  {
    name: "BinaryPlatform B", type: "Binary Options", rating: 4.1,
    features: ["High payouts up to 95%", "Mobile trading app", "60-second options", "24/7 support"],
    reviewHref: "/binary-option/platform-b", visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
    payout: "Up to 95%", expiryTypes: "60s — 1 Hour", assets: "Forex, Crypto, Indices",
  },
  {
    name: "BinaryPlatform C", type: "Binary Options", rating: 4.0,
    features: ["Turbo options", "Range of expiry times", "Technical indicators", "Video tutorials"],
    reviewHref: "/binary-option/platform-c", visitHref: "#",
    gradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)",
    payout: "Up to 90%", expiryTypes: "5 mins — End of Day", assets: "Forex, Stocks, Commodities",
  },
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const defaultBrokerData: Broker[] = defaultBrokers.map((b) => ({
  ...b,
  slug: slugify(b.name),
}));

export type BrokerComparisonField = {
  key: keyof Broker;
  label: string;
};

export const forexComparisonFields: BrokerComparisonField[] = [
  { key: "regulation", label: "Regulation" },
  { key: "minDeposit", label: "Min Deposit" },
  { key: "spread", label: "Spread" },
  { key: "leverage", label: "Leverage" },
  { key: "platforms", label: "Platforms" },
];

export const cryptoComparisonFields: BrokerComparisonField[] = [
  { key: "tradingFees", label: "Trading Fees" },
  { key: "security", label: "Security" },
  { key: "exchangeFeatures", label: "Features" },
  { key: "coins", label: "Coins" },
];

export const binaryComparisonFields: BrokerComparisonField[] = [
  { key: "payout", label: "Max Payout" },
  { key: "expiryTypes", label: "Expiry Times" },
  { key: "assets", label: "Asset Classes" },
];
