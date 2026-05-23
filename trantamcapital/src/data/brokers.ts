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
  order?: number;
  highlights?: string[];   // Key selling points from Excel data, shown as badges on cards
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
  // New Excel-derived fields — Forex
  scalping?: string;
  eaBot?: string;
  withdrawals?: string;
  goldTrading?: string;
  bonusPrograms?: string;
  vietnamSuitability?: string;
  // New Excel-derived fields — Crypto
  futures?: string;
  spot?: string;
  copyTrading?: string;
  web3?: string;
  affiliateProgram?: string;
  // New Excel-derived fields — Binary
  popularity?: string;
  cryptoSupport?: string;
  binaryCopyTrading?: string;
}

// ── Default broker data (fallback when no CMS .md file exists) ──
const defaultBrokers: Omit<Broker, "slug">[] = [
  // ── Forex Brokers (CMS-managed: Exness, IC Markets, Pepperstone, FxPro, XM) ──
  // ForexBroker F — no CMS file, uses fallback
  {
    name: "ForexBroker F", type: "Forex Broker", rating: 4.2, order: 6,
    features: ["Offshore regulated", "High leverage 1:1000", "Instant withdrawals", "Multi-language support"],
    reviewHref: "/forex-broker/broker-f", visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
    regulation: "Offshore", minDeposit: "$50", spread: "1.5 pips", leverage: "1:1000", platforms: "MT4, Mobile App",
  },

  // ── Crypto Exchanges (CMS-managed: Binance, Coinbase, Bybit, OKX, Bitget) ──
  // Exchange F — no CMS file, uses fallback
  {
    name: "Exchange F", type: "Crypto Exchange", rating: 4.1, order: 12,
    features: ["Copy trading", "Low futures fees", "API trading", "Active community"],
    reviewHref: "/crypto-exchange/exchange-f", visitHref: "#",
    gradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
    tradingFees: "0.02%", security: "Medium", exchangeFeatures: "Futures, Copy", coins: "150+",
  },

  // ── Binary Options (CMS-managed: IQ Option, Pocket Option, Quotex, Binomo, Deriv) ──
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

// ── Comparison field definitions ──
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
  { key: "scalping", label: "Scalping" },
  { key: "goldTrading", label: "Gold Trading" },
  { key: "withdrawals", label: "Withdrawals" },
];

export const cryptoComparisonFields: BrokerComparisonField[] = [
  { key: "tradingFees", label: "Trading Fees" },
  { key: "security", label: "Security" },
  { key: "exchangeFeatures", label: "Features" },
  { key: "coins", label: "Coins" },
  { key: "futures", label: "Futures" },
  { key: "copyTrading", label: "Copy Trading" },
  { key: "web3", label: "Web3" },
  { key: "affiliateProgram", label: "Affiliate" },
];

export const binaryComparisonFields: BrokerComparisonField[] = [
  { key: "payout", label: "Max Payout" },
  { key: "expiryTypes", label: "Expiry Times" },
  { key: "assets", label: "Asset Classes" },
  { key: "popularity", label: "Popularity" },
  { key: "binaryCopyTrading", label: "Copy Trading" },
  { key: "cryptoSupport", label: "Crypto Support" },
  { key: "affiliateProgram", label: "Affiliate" },
];
