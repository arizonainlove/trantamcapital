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
    .filter(({ broker }) => broker?.type === "Binary Options")
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
    title: `${broker?.name || "Binary Options Platform"} Review`,
    description: `Detailed review of ${broker?.name || "binary options platform"} — payouts, features, and trading experience.`,
  };
}

export default async function BinaryOptionReview({ params }: Props) {
  const { slug } = await params;
  const brokers = getAllBrokers();
  const review = getReviewBySlug(slug);
  if (!review) notFound();
  let broker = brokers.find((b) => b.slug === review.brokerSlug);
  if (!broker) broker = defaultBrokerData.find((b) => b.slug === review.brokerSlug);
  if (!broker && review.brokerName) {
    broker = { slug: review.brokerSlug, name: review.brokerName, type: "Binary Options", rating: 0, features: [], reviewHref: "", visitHref: "#" };
  }
  if (broker && broker.type !== "Binary Options") notFound();

  return (
    <ReviewPage
      review={review}
      broker={broker}
      categoryLink="/binary-option"
      categoryName="Binary Options"
      badgeGradient="linear-gradient(135deg, #C62828 0%, #B71C1C 100%)"
      badgeLetter={broker?.name?.charAt(0) || "B"}
    />
  );
}
