import Link from "next/link";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/SectionTitle";
import NewsCard from "@/components/NewsCard";
import BrokerCard from "@/components/BrokerCard";
import Card from "@/components/Card";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllNews, getAllBrokers } from "@/lib/content";
import { defaultBrokerData } from "@/data/brokers";

const MarketOverview = dynamic(() => import("@/components/MarketOverview"), {
  ssr: true,
});

const featuredNews = getAllNews().slice(0, 3).map((a) => ({
  category: a.category,
  date: a.date,
  title: a.title,
  excerpt: a.excerpt,
  href: `/news/${a.slug}`,
  image: a.image,
}));

const featuredBrokers = (() => {
  const cms = getAllBrokers();
  const source = cms.length > 0 ? cms : defaultBrokerData;
  return source.map((b) => ({
    name: b.name,
    type: b.type,
    rating: b.rating,
    features: b.features,
    reviewHref: b.reviewHref,
    visitHref: b.visitHref,
    gradient: b.gradient,
    logo: b.logo,
  }));
})();

const platforms = [
  {
    title: "Forex Brokers",
    description: "Compare top regulated forex brokers with competitive spreads, advanced platforms, and expert analysis tools.",
    href: "/forex-broker",
  },
  {
    title: "Crypto Exchanges",
    description: "Find the best cryptocurrency exchanges with low fees, high liquidity, and robust security features.",
    href: "/crypto-exchange",
  },
  {
    title: "Binary Options",
    description: "Explore binary options platforms with intuitive interfaces and comprehensive educational resources.",
    href: "/binary-option",
  },
  {
    title: "Trading Tools",
    description: "Access essential trading tools including calculators, economic calendars, and market analysis resources.",
    href: "/tools",
  },
];

const whyUs = [
  {
    title: "Expert Analysis",
    description: "In-depth reviews and analysis from experienced traders who understand the markets inside out.",
  },
  {
    title: "Comprehensive Coverage",
    description: "From forex to crypto to binary options, we cover all major trading markets in one place.",
  },
  {
    title: "Education First",
    description: "We prioritize trader education with beginner-friendly guides and advanced trading strategies.",
  },
  {
    title: "Trust & Transparency",
    description: "Unbiased reviews, transparent ratings, and honest assessments you can rely on.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ProTradeVision",
  url: "https://protradevision.com",
  description:
    "Expert forex broker reviews, crypto exchange comparisons, and binary options education.",
  provider: {
    "@type": "Organization",
    name: "ProTradeVision",
    description: "Financial market information and education platform",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Section 1: Hero */}
      <section className="bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-dark" />
        <div className="relative max-w-[1200px] mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-tight mb-4">
            Trade Smarter, <span className="text-primary">Invest Wiser</span>
          </h1>
          <p className="text-sm md:text-base text-text-light max-w-[600px] mx-auto mb-6 leading-relaxed">
            Expert forex broker reviews, crypto exchange comparisons, and binary options
            education. Make informed trading decisions with ProTradeVision.
          </p>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            {[
              { value: "50+", label: "Brokers Reviewed" },
              { value: "$2B+", label: "Trading Volume" },
              { value: "100K+", label: "Active Readers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold text-gold">{stat.value}</p>
                <p className="text-xs text-text-light">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/forex-broker"
              className="text-sm font-bold text-white bg-primary hover:bg-primary-hover px-8 py-3 rounded transition-colors min-h-[44px] flex items-center shadow-[0_2px_8px_rgba(232,73,16,0.3)] hover:shadow-[0_4px_12px_rgba(232,73,16,0.4)]"
            >
              Start Trading
            </Link>
            <Link
              href="/crypto-exchange"
              className="text-sm font-bold text-white border-2 border-white/30 hover:border-white px-8 py-3 rounded transition-colors min-h-[44px] flex items-center"
            >
              Compare Brokers
            </Link>
            <Link
              href="/news"
              className="text-sm font-bold text-white border-2 border-white/30 hover:border-white px-8 py-3 rounded transition-colors min-h-[44px] flex items-center"
            >
              Latest News
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Market Overview */}
      <section className="py-12 md:py-[52px] bg-section">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle
            title="Market Overview"
            subtitle="Real-time cryptocurrency, forex, and gold prices"
          />
          <MarketOverview />
        </div>
      </section>

      {/* Section 3: Featured Brokers & Exchanges */}
      <section className="py-12 md:py-[52px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle
            title="Featured Brokers & Exchanges"
            subtitle="Top-rated trading platforms reviewed by our experts"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featuredBrokers.map((broker) => (
              <BrokerCard key={broker.name} {...broker} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Featured News */}
      <section className="py-12 md:py-[52px] bg-section">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle
            title="Latest Market News"
            subtitle="Stay informed with the latest trading and market analysis"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((article) => (
              <NewsCard key={article.title} {...article} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex text-sm font-bold text-primary border-2 border-primary px-6 py-2.5 rounded hover:bg-primary hover:text-white transition-colors min-h-[44px] items-center"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Trading Platforms */}
      <section className="py-12 md:py-[52px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle
            title="Trading Platforms"
            subtitle="Explore our comprehensive trading platform reviews"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platforms.map((platform) => (
              <Link key={platform.title} href={platform.href} className="block group">
                <Card className="text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {platform.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {platform.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {platform.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Why ProTradeVision */}
      <section className="py-12 md:py-[52px] bg-dark">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle
            title="Why ProTradeVision"
            subtitle="What sets us apart as your trusted trading resource"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <Card key={item.title} dark className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Newsletter */}
      <section className="bg-primary">
        <div className="max-w-[600px] mx-auto px-4 py-12 md:py-[52px] text-center">
          <h2 className="text-[28px] font-bold text-white mb-2">Stay Updated</h2>
          <p className="text-sm text-white/80 mb-6">
            Get the latest market news, broker reviews, and trading tips delivered to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
