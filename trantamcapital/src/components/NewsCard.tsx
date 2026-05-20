import Link from "next/link";

interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  imageGradient?: string;
}

export default function NewsCard({
  category,
  date,
  title,
  excerpt,
  href,
  imageGradient = "linear-gradient(135deg, #0F1A2E 0%, #1A2A42 100%)",
}: NewsCardProps) {
  return (
    <Link href={href} className="block group">
      <article className="rounded-lg border border-border bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-shadow overflow-hidden">
        {/* Image placeholder */}
        <div
          className="h-48 flex items-center justify-center"
          style={{ background: imageGradient }}
        >
          <span className="text-white/30 text-sm font-medium uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {category}
            </span>
            <span className="text-xs text-text-light">{date}</span>
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
