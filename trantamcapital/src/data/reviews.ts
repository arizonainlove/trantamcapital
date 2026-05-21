export interface ReviewFeature {
  label: string;
  value: string;
}

export interface ReviewRating {
  label: string;
  score: number;
}

export interface ReviewContent {
  slug: string;
  brokerSlug: string;
  pros: string[];
  cons: string[];
  keyFeatures: ReviewFeature[];
  ratingSummary: ReviewRating[];
  trustScore: number;
  content: string;
}

export const defaultReviews: ReviewContent[] = [
  // ── Forex Brokers ──
  {
    slug: "broker-a", brokerSlug: "forexbroker-a",
    pros: ["FCA & CySEC regulated", "0.0 pip spreads on major pairs", "MT4, MT5, and cTrader support", "1:500 leverage available", "Negative balance protection", "24/7 multilingual support"],
    cons: ["Higher commission on ECN accounts", "No cryptocurrency trading", "Inactivity fee after 6 months"],
    keyFeatures: [
      { label: "Regulation", value: "FCA, CySEC" },
      { label: "Min Deposit", value: "$100" },
      { label: "Spread", value: "From 0.0 pips" },
      { label: "Leverage", value: "Up to 1:500" },
      { label: "Platforms", value: "MT4, MT5, cTrader" },
      { label: "Account Types", value: "Standard, ECN, Islamic" },
    ],
    ratingSummary: [
      { label: "Regulation & Safety", score: 9.5 },
      { label: "Trading Platforms", score: 9.0 },
      { label: "Spreads & Fees", score: 9.5 },
      { label: "Customer Support", score: 8.5 },
      { label: "Education", score: 8.0 },
    ],
    trustScore: 92,
    content: "ForexBroker A is a well-established forex broker regulated by both the Financial Conduct Authority (FCA) in the UK and the Cyprus Securities and Exchange Commission (CySEC). With over a decade of operation, they have built a reputation for reliability, competitive pricing, and excellent customer service.\n\nThe broker offers tight spreads starting from 0.0 pips on ECN accounts, making them an excellent choice for scalpers and high-volume traders. They support the industry-standard MetaTrader 4 and 5 platforms, as well as cTrader for those seeking advanced charting capabilities.",
  },
  {
    slug: "broker-b", brokerSlug: "forexbroker-b",
    pros: ["ASIC regulated", "True ECN pricing", "Competitive spreads", "Wide range of currency pairs", "Fast order execution", "No requotes"],
    cons: ["No bonuses or promotions", "Inactivity fee", "Limited educational resources"],
    keyFeatures: [
      { label: "Regulation", value: "ASIC" },
      { label: "Min Deposit", value: "$200" },
      { label: "Spread", value: "From 0.0 pips" },
      { label: "Leverage", value: "Up to 1:500" },
      { label: "Platforms", value: "MT4, MT5, cTrader" },
      { label: "Account Types", value: "Standard, Raw, Islamic" },
    ],
    ratingSummary: [
      { label: "Regulation & Safety", score: 8.5 },
      { label: "Trading Platforms", score: 9.0 },
      { label: "Spreads & Fees", score: 9.5 },
      { label: "Customer Support", score: 8.0 },
      { label: "Education", score: 7.5 },
    ],
    trustScore: 88,
    content: "ForexBroker B is a globally recognized forex broker known for its true ECN pricing model and ultra-tight spreads. Regulated by ASIC, they have built a strong reputation among active traders and scalpers who demand fast execution and deep liquidity.\n\nWith over 60 currency pairs and access to major indices and commodities, ForexBroker B offers a comprehensive trading environment. Their use of MetaTrader 4, MT5, and cTrader ensures traders have access to industry-leading tools and charting capabilities.",
  },
  {
    slug: "broker-c", brokerSlug: "forexbroker-c",
    pros: ["Multi-regulated (ASIC, FCA, CySEC)", "Razor spreads from 0.0 pips", "1200+ tradable instruments", "Fast execution with No Dealing Desk", "Excellent customer support", "Advanced trading tools"],
    cons: ["Higher fees for inactive accounts", "Limited product range for US clients", "No cTrader platform"],
    keyFeatures: [
      { label: "Regulation", value: "ASIC, FCA, CySEC, CMA" },
      { label: "Min Deposit", value: "$200" },
      { label: "Spread", value: "From 0.0 pips" },
      { label: "Leverage", value: "Up to 1:200" },
      { label: "Platforms", value: "MT4, MT5, TradingView" },
      { label: "Account Types", value: "Standard, Razor, Islamic" },
    ],
    ratingSummary: [
      { label: "Regulation & Safety", score: 9.0 },
      { label: "Trading Platforms", score: 8.5 },
      { label: "Spreads & Fees", score: 9.5 },
      { label: "Customer Support", score: 9.0 },
      { label: "Education", score: 8.5 },
    ],
    trustScore: 90,
    content: "ForexBroker C is a multi-regulated forex broker offering over 1,200 tradable instruments including forex, indices, commodities, cryptocurrencies, and shares. With razor-thin spreads starting from 0.0 pips on Razor accounts, they cater to both retail and institutional clients.\n\nThe broker is known for its fast execution speeds and No Dealing Desk (NDD) policy, ensuring traders get fair and transparent pricing. They support MetaTrader 4, MetaTrader 5, and TradingView, giving traders flexibility in their choice of platform.",
  },

  // ── Crypto Exchanges ──
  {
    slug: "exchange-a", brokerSlug: "exchange-a",
    pros: ["500+ cryptocurrencies available", "Low trading fees (0.1%)", "Futures and margin trading", "Strong security track record", "High liquidity", "24/7 customer support"],
    cons: ["Complex for beginners", "Withdrawal fees can be high", "Not available in all countries"],
    keyFeatures: [
      { label: "Cryptocurrencies", value: "500+" },
      { label: "Trading Fees", value: "0.1%" },
      { label: "Security", value: "Very High" },
      { label: "Features", value: "Spot, Futures, Margin, Staking" },
      { label: "Mobile App", value: "iOS & Android" },
      { label: "Customer Support", value: "24/7 Live Chat" },
    ],
    ratingSummary: [
      { label: "Security", score: 9.5 },
      { label: "Fees", score: 9.0 },
      { label: "Coin Selection", score: 9.5 },
      { label: "User Experience", score: 8.5 },
      { label: "Customer Support", score: 8.5 },
    ],
    trustScore: 94,
    content: "Exchange A is one of the world's largest and most trusted cryptocurrency exchanges, offering over 500 cryptocurrencies for trading. With industry-leading security measures and deep liquidity, they serve both retail and institutional clients across the globe.\n\nThe exchange charges a competitive 0.1% trading fee and offers advanced trading features including futures, margin trading, and staking. Their security infrastructure includes cold storage for the majority of funds, two-factor authentication, and regular security audits.",
  },
  {
    slug: "exchange-b", brokerSlug: "exchange-b",
    pros: ["Regulated US exchange (Nasdaq listed)", "User-friendly interface", "High security standards", "Educational resources", "Recurring buys", "Insurance on funds"],
    cons: ["Higher fees than competitors", "Limited altcoin selection", "Advanced trading features limited"],
    keyFeatures: [
      { label: "Cryptocurrencies", value: "200+" },
      { label: "Trading Fees", value: "0.5%" },
      { label: "Security", value: "Very High" },
      { label: "Features", value: "Spot, Staking, NFT, Recurring" },
      { label: "Mobile App", value: "iOS & Android" },
      { label: "Customer Support", value: "24/7 Chat & Phone" },
    ],
    ratingSummary: [
      { label: "Security", score: 9.5 },
      { label: "Fees", score: 7.0 },
      { label: "Coin Selection", score: 7.5 },
      { label: "User Experience", score: 9.0 },
      { label: "Customer Support", score: 8.5 },
    ],
    trustScore: 90,
    content: "Exchange B is a publicly traded cryptocurrency exchange (NASDAQ: COIN) known for its user-friendly interface and regulatory compliance. As one of the most trusted on-ramps for new crypto investors, they offer a secure platform for buying, selling, and storing digital assets.\n\nWith over 200 cryptocurrencies available, Exchange B prioritizes security and regulatory compliance above all else. They offer staking rewards, an NFT marketplace, and educational resources for traders of all levels. While fees are higher than some competitors, the platform's ease of use and security make it a top choice for beginners.",
  },
  {
    slug: "exchange-c", brokerSlug: "exchange-c",
    pros: ["Up to 100x leverage", "400+ trading pairs", "Copy trading features", "Advanced derivatives", "Low fees", "Strong liquidity"],
    cons: ["Not available in US", "Complex for beginners", "Customer support response times"],
    keyFeatures: [
      { label: "Cryptocurrencies", value: "400+" },
      { label: "Trading Fees", value: "0.1%" },
      { label: "Security", value: "High" },
      { label: "Features", value: "Derivatives, Copy Trading, Spot" },
      { label: "Mobile App", value: "iOS & Android" },
      { label: "Customer Support", value: "24/7 Live Chat" },
    ],
    ratingSummary: [
      { label: "Security", score: 8.5 },
      { label: "Fees", score: 9.0 },
      { label: "Coin Selection", score: 8.5 },
      { label: "User Experience", score: 8.0 },
      { label: "Customer Support", score: 8.0 },
    ],
    trustScore: 86,
    content: "Exchange C is a leading derivatives trading platform specializing in cryptocurrency futures and perpetual contracts. With up to 100x leverage and over 400 trading pairs, they have become a preferred platform for experienced traders seeking advanced trading instruments.\n\nThe exchange offers competitive fees, deep liquidity, and innovative features like copy trading. Their platform is designed for traders who need advanced order types, API trading, and comprehensive charting tools. Exchange C also provides a spot trading platform and supports various trading bots.",
  },

  // ── Binary Options Platforms ──
  {
    slug: "platform-a", brokerSlug: "binaryplatform-a",
    pros: ["Very user-friendly platform", "Multiple asset classes available", "Free demo account", "Fast withdrawals", "Competitive payouts up to 92%", "Educational resources"],
    cons: ["Limited expiry times", "Not available in all countries", "Higher minimum trade amount"],
    keyFeatures: [
      { label: "Asset Classes", value: "Forex, Stocks, Crypto, Commodities" },
      { label: "Max Payout", value: "Up to 92%" },
      { label: "Min Trade", value: "$10" },
      { label: "Platform", value: "Web & Mobile" },
      { label: "Demo Account", value: "Free (Virtual $10,000)" },
      { label: "Withdrawal", value: "1-3 business days" },
    ],
    ratingSummary: [
      { label: "Platform Usability", score: 9.0 },
      { label: "Payouts", score: 8.5 },
      { label: "Asset Selection", score: 8.0 },
      { label: "Customer Support", score: 8.0 },
      { label: "Education", score: 8.5 },
    ],
    trustScore: 82,
    content: "BinaryPlatform A is a leading binary options trading platform known for its intuitive interface and comprehensive educational resources. They offer trading on multiple asset classes including currency pairs, stocks, commodities, and cryptocurrencies.\n\nThe platform provides competitive payouts of up to 92% and features a free demo account for beginners to practice their strategies. With fast withdrawal processing and responsive customer support, they have built a solid reputation in the binary options industry.",
  },
];
