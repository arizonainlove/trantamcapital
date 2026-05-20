import type { Metadata } from "next";
import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import SectionTitle from "@/components/SectionTitle";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Market News",
  description: "Latest cryptocurrency, forex, and binary options news. Stay informed with market analysis and trading insights.",
};

const allNews = [
  { category: "Cryptocurrency", date: "May 20, 2026", title: "Bitcoin Surges Past $100K: What This Means for the Market", excerpt: "Bitcoin has reached a new all-time high, crossing the $100,000 mark for the first time. Analysts weigh in on what this means for the broader cryptocurrency market.", href: "/news/bitcoin-surges" },
  { category: "Forex", date: "May 19, 2026", title: "Central Bank Rate Decisions: Impact on Major Currency Pairs", excerpt: "With multiple central banks announcing rate decisions this quarter, forex traders are bracing for increased volatility across major currency pairs.", href: "/news/central-bank-rates" },
  { category: "Binary Options", date: "May 18, 2026", title: "Binary Options Trading Strategies for Volatile Markets", excerpt: "Discover proven binary options trading strategies that perform well in volatile market conditions.", href: "/news/binary-strategies" },
  { category: "Markets", date: "May 17, 2026", title: "Global Market Outlook: Q3 2026 Forecast", excerpt: "Our comprehensive Q3 2026 market outlook covers key trends, potential risks, and opportunities across all major asset classes.", href: "/news/q3-outlook" },
  { category: "Cryptocurrency", date: "May 16, 2026", title: "Ethereum 2.0: Staking Rewards Hit New Highs", excerpt: "Ethereum staking rewards have reached unprecedented levels as more validators join the network. What this means for ETH holders.", href: "/news/ethereum-staking" },
  { category: "Forex", date: "May 15, 2026", title: "EUR/USD Analysis: Key Levels to Watch This Week", excerpt: "Technical analysis of the EUR/USD pair with key support and resistance levels every trader should monitor.", href: "/news/eur-usd-analysis" },
  { category: "Binary Options", date: "May 14, 2026", title: "60-Second Binary Options: Pro Tips for Quick Trades", excerpt: "Learn the strategies professional traders use for successful 60-second binary options trading.", href: "/news/60-second-tips" },
  { category: "Markets", date: "May 13, 2026", title: "Commodity Prices Surge Amid Supply Chain Concerns", excerpt: "Gold, silver, and oil prices are experiencing significant movements. Our analysts break down the key drivers.", href: "/news/commodity-surge" },
  { category: "Cryptocurrency", date: "May 12, 2026", title: "Altcoin Season: Which Projects Are Gaining Momentum", excerpt: "As Bitcoin stabilizes, several altcoins are showing strong momentum. Here are the projects gaining traction this month.", href: "/news/altcoin-season" },
];

const categories = ["All", "Cryptocurrency", "Forex", "Binary Options", "Markets"];
const recentPosts = allNews.slice(0, 4);

export default function NewsPage() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Market News</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Stay ahead of the markets with our latest news, analysis, and trading insights
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`text-sm px-4 py-2 rounded-full border min-h-[44px] transition-colors ${
                      cat === "All"
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-text-secondary border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allNews.map((article) => (
                  <NewsCard key={article.title} {...article} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-10">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-11 h-11 rounded text-sm font-semibold transition-colors ${
                      page === 1
                        ? "bg-primary text-white"
                        : "bg-white text-text-secondary border border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-[300px] shrink-0">
              {/* Categories */}
              <div className="rounded-lg border border-border bg-white p-5 mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.filter((c) => c !== "All").map((cat) => (
                    <li key={cat}>
                      <Link href="#" className="flex justify-between text-sm text-text-secondary hover:text-primary transition-colors py-1">
                        <span>{cat}</span>
                        <span className="text-text-light">({allNews.filter(n => n.category === cat).length})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="rounded-lg border border-border bg-white p-5 mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.title}>
                      <Link href={post.href} className="group">
                        <p className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-xs text-text-light mt-1">{post.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Widget */}
              <div className="rounded-lg border border-border bg-primary-light p-5">
                <h3 className="text-lg font-bold text-text-primary mb-2">Newsletter</h3>
                <p className="text-sm text-text-secondary mb-4">Get the latest news delivered to your inbox.</p>
                <NewsletterForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
