import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBrokers } from "@/lib/content";
import { getReviewBySlug } from "@/lib/reviews";
import ReviewPage from "@/components/ReviewPage";

export const dynamic = "force-static";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { getAllReviews } = await import("@/lib/reviews");
  const reviews = getAllReviews();
  const brokers = getAllBrokers();
  return reviews
    .map((r) => ({ slug: r.slug, broker: brokers.find((b) => b.slug === r.brokerSlug) }))
    .filter(({ broker }) => broker?.type === "Crypto Exchange")
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brokers = getAllBrokers();
  const review = getReviewBySlug(params.slug);
  const broker = review ? brokers.find((b) => b.slug === review.brokerSlug) : undefined;
  return {
    title: `${broker?.name || "Crypto Exchange"} Review`,
    description: `Detailed review of ${broker?.name || "crypto exchange"} — fees, security, features, and trading experience.`,
  };
}

export default function CryptoExchangeReview({ params }: Props) {
  const brokers = getAllBrokers();
  const review = getReviewBySlug(params.slug);
  if (!review) notFound();
  const broker = brokers.find((b) => b.slug === review.brokerSlug);
  if (broker && broker.type !== "Crypto Exchange") notFound();

  return (
    <ReviewPage
      review={review}
      broker={broker}
      categoryLink="/crypto-exchange"
      categoryName="Crypto Exchanges"
      badgeGradient="linear-gradient(135deg, #F9A825 0%, #F57F17 100%)"
      badgeLetter={broker?.name?.charAt(0) || "E"}
    />
  );
}
