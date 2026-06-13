"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import BrokerCard from "@/components/BrokerCard";
import Pagination from "@/components/Pagination";
import type { GuideArticle } from "@/lib/content";
import type { Broker } from "@/data/brokers";

interface GuidesSectionProps {
  guides: GuideArticle[];
  brokers: Broker[];
}

const GUIDES_PER_PAGE_DESKTOP = 6; // 3 rows × 2 columns
const GUIDES_PER_PAGE_MOBILE = 4; // 4 rows × 1 column

const platformLabels: Record<string, string> = {
  "crypto-exchange": "Cryptocurrency",
  "forex-broker": "Forex",
  "binary-option": "Binary Options",
  "proprietry-trading-firm": "Proprietary Trading Firm",
};

export default function GuidesSection({ guides, brokers }: GuidesSectionProps) {
  const [page, setPage] = useState(1);

  // Determine per-page count based on screen width
  // We default to desktop and let useEffect adjust, but use a simple approach:
  // always use desktop count since the grid collapses to 1-col on mobile
  const perPage = GUIDES_PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(guides.length / perPage);
  const safePage = Math.min(page, Math.max(totalPages, 1));

  const currentGuides = useMemo(() => {
    const start = (safePage - 1) * perPage;
    return guides.slice(start, start + perPage);
  }, [guides, safePage, perPage]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // Scroll to top of guides section
    document.getElementById("guides-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="guides-section" className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Left — Articles */}
          <div>
            {/* Top pagination */}
            {totalPages > 1 && (
              <div className="mb-6">
                <Pagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}

            {/* Articles grid */}
            {currentGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {currentGuides.map((guide) => (
                  <NewsCard
                    key={guide.slug}
                    category={platformLabels[guide.platform] || guide.platform}
                    date={guide.date}
                    title={guide.title}
                    excerpt={guide.excerpt}
                    href={`/news/${guide.slug}`}
                    image={guide.image}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="text-4xl mb-3">📘</div>
                <h3 className="text-lg font-bold text-text-primary mb-1">No Guides Available</h3>
                <p className="text-sm text-text-secondary">Check back later for new crypto exchange guides.</p>
              </div>
            )}

            {/* Bottom pagination */}
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>

          {/* Right — Brokers Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h3 className="text-lg font-bold text-text-primary mb-4">Top Crypto Exchanges</h3>
            <div className="flex flex-col gap-3">
              {brokers.length > 0 ? (
                brokers.map((broker) => (
                  <BrokerCard key={broker.slug} {...broker} variant="compact" />
                ))
              ) : (
                <p className="text-sm text-text-secondary">No exchanges available.</p>
              )}
            </div>
            {/* Link to full comparison */}
            <Link
              href="#exchange-comparison"
              className="block mt-4 text-sm font-semibold text-primary hover:text-primary-hover transition-colors text-center"
            >
              View Full Comparison →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
