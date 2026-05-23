import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumb";
import { HiStar, HiCheckCircle, HiShieldCheck } from "react-icons/hi";
import type { Broker } from "@/data/brokers";
import type { ReviewContent } from "@/data/reviews";

interface ReviewPageProps {
  review: ReviewContent;
  broker: Broker | undefined;
  categoryLink: string;
  categoryName: string;
  badgeGradient: string;
  badgeLetter: string;
}

export default function ReviewPage({
  review,
  broker,
  categoryLink,
  categoryName,
  badgeGradient,
  badgeLetter,
}: ReviewPageProps) {
  const name = broker?.name || "Unknown";
  const type = broker?.type || categoryName;
  const rating = broker?.rating || 0;
  const gradient = broker?.gradient || badgeGradient;
  const visitHref = broker?.visitHref || "#";

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: categoryName, href: categoryLink },
    { label: name },
  ];

  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex items-center gap-4 mb-4">
            {broker?.logo ? (
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white border border-border overflow-hidden">
                <img src={broker.logo} alt={`${name} logo`} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: gradient }}
              >
                <span className="text-white font-bold text-xl">{badgeLetter}</span>
              </div>
            )}
            <div>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">{name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-primary font-semibold">{type}</span>
                <span className="text-text-light">|</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <HiStar
                      key={i}
                      className={`text-sm ${i < Math.floor(rating) ? "text-gold" : "text-text-light/30"}`}
                    />
                  ))}
                  <span className="text-sm text-text-light ml-1">{rating}/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Review */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <SectionTitle title="Overview" />
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  {review.content.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div>
                <SectionTitle title="Pros & Cons" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-success mb-3 flex items-center gap-2">
                      <HiCheckCircle /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {review.pros.map((p) => (
                        <li key={p} className="text-sm text-text-secondary flex items-start gap-2">
                          <HiCheckCircle className="text-success mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-error mb-3">Cons</h4>
                    <ul className="space-y-2">
                      {review.cons.map((c) => (
                        <li key={c} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-error mt-0.5 shrink-0">&#10005;</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              {review.keyFeatures.length > 0 && (
                <div>
                  <SectionTitle title="Key Features" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {review.keyFeatures.map((f) => (
                      <div key={f.label} className="flex justify-between p-3 rounded bg-section">
                        <span className="text-sm font-semibold text-text-primary">{f.label}</span>
                        <span className="text-sm text-text-secondary">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related News */}
              <div>
                <SectionTitle title="Related Articles" />
                <p className="text-sm text-text-secondary">
                  Visit our <Link href="/news" className="text-link hover:underline">news page</Link> for the latest updates and analysis related to {name}.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card>
                <h3 className="text-lg font-bold text-text-primary mb-4">Rating Summary</h3>
                {review.ratingSummary.length > 0 && (
                  <div className="space-y-3 mb-5">
                    {review.ratingSummary.map((r) => (
                      <div key={r.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-secondary">{r.label}</span>
                          <span className="font-semibold text-text-primary">{r.score}/10</span>
                        </div>
                        <div className="h-2 bg-section rounded-full overflow-hidden">
                          <div className="h-full bg-gold rounded-full" style={{ width: `${r.score * 10}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {review.trustScore > 0 && (
                  <div className="flex items-center gap-2 p-3 rounded bg-primary-light mb-5">
                    <HiShieldCheck className="text-primary shrink-0" />
                    <span className="text-sm text-text-primary font-semibold">Trust Score: {review.trustScore}/100</span>
                  </div>
                )}
                <a
                  href={visitHref}
                  target={visitHref !== "#" ? "_blank" : undefined}
                  rel={visitHref !== "#" ? "noopener noreferrer" : undefined}
                  className="block text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Visit {name}
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
