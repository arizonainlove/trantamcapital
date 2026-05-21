import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNews, getArticleBySlug } from "@/lib/content";
import NewsletterForm from "@/components/NewsletterForm";

const allNews = getAllNews();

export async function generateStaticParams() {
  return allNews.map((article) => ({ slug: article.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedNews = allNews
    .filter((n) => n.slug !== slug && n.category === article.category)
    .slice(0, 3);

  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <p className="text-sm text-primary font-semibold mb-2">{article.category}</p>
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white leading-tight">
            {article.title}
          </h1>
          <p className="text-sm text-text-light mt-3">
            {article.date}
            {article.author && <span> &mdash; {article.author}</span>}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex text-sm text-text-secondary hover:text-primary transition-colors mb-8"
          >
            &larr; Back to News
          </Link>

          <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed whitespace-pre-line">
            {article.content}
          </div>

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-lg font-bold text-text-primary mb-4">
                More in {article.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedNews.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/news/${n.slug}`}
                    className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
                  >
                    <p className="text-xs text-primary font-semibold mb-1">{n.category}</p>
                    <p className="text-sm font-semibold text-text-primary line-clamp-2">
                      {n.title}
                    </p>
                    <p className="text-xs text-text-light mt-1">{n.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-12 bg-primary-light rounded-lg p-6 text-center">
            <h2 className="text-lg font-bold text-text-primary mb-2">Stay Updated</h2>
            <p className="text-sm text-text-secondary mb-4">
              Get the latest market news delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
