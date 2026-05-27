import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBrokers } from "@/lib/content";
import { getReviewBySlug } from "@/lib/reviews";
import { defaultBrokerData, type Broker } from "@/data/brokers";
import ReviewPage from "@/components/ReviewPage";

export const dynamic = "force-static";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { getAllReviews } = await import("@/lib/reviews");
  const reviews = getAllReviews();
  const brokers = getAllBrokers();
  return reviews
    .map((r) => ({ slug: r.slug, broker: brokers.find((b) => b.slug === r.brokerSlug) }))
    .filter(({ broker }) => broker?.type === "Proprietary Trading Firm")
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brokers = getAllBrokers();
  const review = getReviewBySlug(slug);
  const broker = review
    ? (brokers.find((b) => b.slug === review.brokerSlug) || defaultBrokerData.find((b) => b.slug === review.brokerSlug))
    : undefined;
  return {
    title: `${broker?.name || "Prop Trading Firm"} Review`,
    description: `Detailed review of ${broker?.name || "proprietary trading firm"} — profit split, evaluation process, fees, and trading conditions.`,
  };
}

export default async function PropFirmReview({ params }: Props) {
  const { slug } = await params;
  const brokers = getAllBrokers();
  const review = getReviewBySlug(slug);
  if (!review) notFound();
  let broker = brokers.find((b) => b.slug === review.brokerSlug);
  if (!broker) broker = defaultBrokerData.find((b) => b.slug === review.brokerSlug);
  if (!broker && review.brokerName) {
    broker = { slug: review.brokerSlug, name: review.brokerName, type: "Proprietary Trading Firm", rating: 0, features: [], reviewHref: "", visitHref: "#" };
  }
  if (broker && broker.type !== "Proprietary Trading Firm") notFound();

  return (
    <ReviewPage
      review={review}
      broker={broker}
      categoryLink="/proprietary-trading-firm"
      categoryName="Prop Trading Firms"
      badgeGradient="linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)"
      badgeLetter={broker?.name?.charAt(0) || "P"}
    />
  );
}
