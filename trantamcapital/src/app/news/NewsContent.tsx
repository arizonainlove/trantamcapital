"use client";

import { useState } from "react";
import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import NewsletterForm from "@/components/NewsletterForm";
import { allNews, categories } from "@/data/news";

const ITEMS_PER_PAGE = 6;

export default function NewsContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews =
    activeCategory === "All"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const recentPosts = allNews.slice(0, 4);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

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
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-sm px-4 py-2 rounded-full border min-h-[44px] transition-colors ${
                      activeCategory === cat
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
                {paginatedNews.map((article) => (
                  <NewsCard
                    key={article.slug}
                    category={article.category}
                    date={article.date}
                    title={article.title}
                    excerpt={article.excerpt}
                    href={`/news/${article.slug}`}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-10">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-11 h-11 rounded text-sm font-semibold transition-colors ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "bg-white text-text-secondary border border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-[300px] shrink-0">
              {/* Categories */}
              <div className="rounded-lg border border-border bg-white p-5 mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.filter((c) => c !== "All").map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className="flex justify-between w-full text-sm text-text-secondary hover:text-primary transition-colors py-1"
                      >
                        <span>{cat}</span>
                        <span className="text-text-light">({allNews.filter(n => n.category === cat).length})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="rounded-lg border border-border bg-white p-5 mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/news/${post.slug}`} className="group">
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
