import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllNews, getRecentPosts, categories } from "@/lib/content";
import NewsCard from "@/components/NewsCard";
import NewsletterForm from "@/components/NewsletterForm";

const categorySlugs: Record<string, string> = {
  cryptocurrency: "Cryptocurrency",
  forex: "Forex",
  "binary-options": "Binary Options",
  markets: "Markets",
};

export async function generateStaticParams() {
  return Object.keys(categorySlugs).map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryName = categorySlugs[category];
  if (!categoryName) return {};
  return {
    title: `${categoryName} News`,
    description: `Latest ${categoryName.toLowerCase()} news, analysis, and trading insights. Stay informed with ProTradeVision.`,
  };
}

export default async function NewsCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryName = categorySlugs[category];
  if (!categoryName) notFound();

  const allNews = getAllNews();
  const filteredNews = allNews.filter((n) => n.category === categoryName);
  const allRecentPosts = getRecentPosts(4);

  function slugify(cat: string) {
    return cat.toLowerCase().replace(/\s+/g, "-");
  }

  const categoriesWithCount = categories
    .filter((c) => c !== "All")
    .map((cat) => ({
      name: cat,
      count: allNews.filter((n) => n.category === cat).length,
      slug: slugify(cat),
    }));

  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">{categoryName} News</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Latest {categoryName.toLowerCase()} news, analysis, and insights
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-text-secondary">No articles found in this category yet.</p>
                  <Link
                    href="/news"
                    className="inline-block mt-4 text-sm font-bold text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded min-h-[44px] transition-colors"
                  >
                    View All News
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredNews.map((article) => (
                    <NewsCard
                      key={article.slug}
                      category={article.category}
                      date={article.date}
                      title={article.title}
                      excerpt={article.excerpt}
                      href={`/news/${article.slug}`}
                      image={article.image}
                    />
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
                  {categoriesWithCount.map((cat) => (
                    <li key={cat.name}>
                      <Link
                        href={`/news/categories/${cat.slug}`}
                        className={`flex justify-between w-full text-sm py-1 transition-colors ${
                          cat.slug === category
                            ? "text-primary font-semibold"
                            : "text-text-secondary hover:text-primary"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-text-light">({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="rounded-lg border border-border bg-white p-5 mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {allRecentPosts.map((post) => (
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
