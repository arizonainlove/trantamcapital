export interface Broker {
  slug: string;
  name: string;
  type: "Forex Broker" | "Crypto Exchange" | "Binary Options";
  rating: number;
  features: string[];
  reviewHref: string;
  visitHref: string;
  gradient?: string;
}

const defaultBrokers: Omit<Broker, "slug">[] = [
  {
    name: "ForexBroker A",
    type: "Forex Broker",
    rating: 4.8,
    features: ["Regulated by FCA & CySEC", "0.0 pip spreads", "MT4 & MT5 supported", "1:500 leverage"],
    reviewHref: "/forex-broker/broker-a",
    visitHref: "#",
    gradient: "linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)",
  },
  {
    name: "ForexBroker B",
    type: "Forex Broker",
    rating: 4.6,
    features: ["ASIC regulated", "Negative balance protection", "Free education", "24/7 support"],
    reviewHref: "/forex-broker/broker-b",
    visitHref: "#",
    gradient: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
  },
  {
    name: "ForexBroker C",
    type: "Forex Broker",
    rating: 4.5,
    features: ["FCA regulated", "Social trading", "Copy trading", "Competitive spreads"],
    reviewHref: "/forex-broker/broker-c",
    visitHref: "#",
    gradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)",
  },
  {
    name: "Exchange A",
    type: "Crypto Exchange",
    rating: 4.7,
    features: ["500+ cryptocurrencies", "Low fees 0.1%", "Futures & margin", "Security track record"],
    reviewHref: "/crypto-exchange/exchange-a",
    visitHref: "#",
    gradient: "linear-gradient(135deg, #F9A825 0%, #F57F17 100%)",
  },
  {
    name: "Exchange B",
    type: "Crypto Exchange",
    rating: 4.5,
    features: ["User-friendly interface", "Staking rewards", "NFT marketplace", "Institutional security"],
    reviewHref: "/crypto-exchange/exchange-b",
    visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
  },
  {
    name: "Exchange C",
    type: "Crypto Exchange",
    rating: 4.4,
    features: ["Regulated EU & Asia", "Advanced charting", "OTC trading desk", "Cold storage assets"],
    reviewHref: "/crypto-exchange/exchange-c",
    visitHref: "#",
    gradient: "linear-gradient(135deg, #00897B 0%, #00695C 100%)",
  },
  {
    name: "BinaryPlatform A",
    type: "Binary Options",
    rating: 4.3,
    features: ["User-friendly platform", "Multiple assets", "Demo account", "Fast withdrawals"],
    reviewHref: "/binary-option/platform-a",
    visitHref: "#",
    gradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)",
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
