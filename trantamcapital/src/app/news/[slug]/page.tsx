import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNews, getArticleBySlug } from "@/lib/content";
import NewsletterForm from "@/components/NewsletterForm";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      images: article.image ? [{ url: article.image, width: 1200, height: 630 }] : undefined,
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

          {article.image && (
            <div className="w-full mb-8 rounded-lg overflow-hidden bg-dark relative aspect-video">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          )}

          <div className="prose max-w-none text-text-secondary leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl font-bold text-text-primary mt-10 mb-4 pb-2 border-b border-border">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-bold text-text-primary mt-8 mb-3 pl-3 border-l-4 border-primary">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-base font-bold text-text-primary mt-6 mb-2">
                    {children}
                  </h4>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt || ""}
                    className="w-full rounded-lg my-6"
                    loading="lazy"
                  />
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-link hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
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
