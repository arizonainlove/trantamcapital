import Link from "next/link";
import { HiStar, HiCheckCircle } from "react-icons/hi";

interface BrokerCardProps {
  name: string;
  type: string;
  rating: number;
  features: string[];
  reviewHref: string;
  visitHref: string;
  gradient?: string;
  logo?: string;
  highlights?: string[];
  variant?: "full" | "compact";
}

function HighlightBadge({ text }: { text: string }) {
  // Color-code highlights based on rating keywords
  const isExcellent = text.startsWith("Excellent") || text.startsWith("Very Strong");
  const isVery = text.startsWith("Very") && !isExcellent;
  const isStrong = text.startsWith("Strong") || text.startsWith("Very Good");
  const isGood = text.startsWith("Good") || text.startsWith("Long-established");
  const isTop = text.startsWith("Very High") || text.startsWith("Excellent");

  let bgClass = "bg-link/10 text-link border-link/20";
  if (isTop) bgClass = "bg-success/10 text-success border-success/20";
  else if (isExcellent) bgClass = "bg-success/10 text-success border-success/20";
  else if (isVery) bgClass = "bg-primary-light text-primary border-primary/20";
  else if (isStrong) bgClass = "bg-link/10 text-link border-link/20";
  else if (isGood) bgClass = "bg-warning/10 text-warning border-warning/20";

  return (
    <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full border ${bgClass}`}>
      {text}
    </span>
  );
}

export default function BrokerCard({
  name,
  type,
  rating,
  features,
  reviewHref,
  visitHref,
  gradient = "linear-gradient(135deg, #E84910 0%, #FF6B35 100%)",
  logo,
  highlights,
  variant = "full",
}: BrokerCardProps) {
  // Compact variant — sidebar layout (horizontal, minimal)
  if (variant === "compact") {
    return (
      <Link href={reviewHref} className="block group">
        <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-shadow">
          {/* Logo */}
          {logo ? (
            <div className="w-10 h-10 rounded-lg shrink-0 bg-white border border-border overflow-hidden flex items-center justify-center">
              <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" loading="lazy" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center" style={{ background: gradient }}>
              <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
            </div>
          )}
          {/* Info */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-text-primary truncate group-hover:text-primary transition-colors">{name}</h4>
              <div className="flex items-center gap-0.5 shrink-0">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? "text-gold" : "text-border"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-0.5">
              <span className="text-[11px] text-text-secondary truncate">{type}</span>
              <span className="text-xs font-semibold text-primary shrink-0">Review →</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Full variant — original card layout
  return (
    <div className="rounded-lg border border-border bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-shadow p-6">
      {/* Logo */}
      {logo ? (
        <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-white border border-border overflow-hidden">
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" loading="lazy" />
        </div>
      ) : (
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
          style={{ background: gradient }}
        >
          <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
        </div>
      )}

      {/* Name + Type */}
      <h3 className="text-lg font-bold text-text-primary mb-1">{name}</h3>
      <span className="text-xs font-medium text-primary uppercase tracking-wider">
        {type}
      </span>

      {/* Rating */}
      <div className="flex items-center gap-1 my-3">
        {Array.from({ length: 5 }, (_, i) => (
          <HiStar
            key={i}
            className={`text-base ${i < Math.floor(rating) ? "text-gold" : "text-border"}`}
          />
        ))}
        <span className="text-sm text-text-secondary ml-1">{rating}/5</span>
      </div>

      {/* Highlights — key selling points from Excel data */}
      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {highlights.map((h) => (
            <HighlightBadge key={h} text={h} />
          ))}
        </div>
      )}

      {/* Features */}
      <ul className="space-y-1.5 mb-5">
        {features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
            <HiCheckCircle className="text-success mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link
          href={reviewHref}
          className="flex-1 text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center"
        >
          Read Review
        </Link>
        <a
          href={visitHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-sm text-primary bg-primary-light border border-primary hover:bg-primary hover:text-white px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}
