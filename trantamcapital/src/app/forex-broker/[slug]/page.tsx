import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBrokers } from "@/lib/content";
import { getReviewBySlug } from "@/lib/reviews";
import { defaultBrokerData } from "@/data/brokers";
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
    .filter(({ broker }) => broker?.type === "Forex Broker")
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
    title: `${broker?.name || "Forex Broker"} Review`,
    description: `Detailed review of ${broker?.name || "forex broker"} — regulation, spreads, leverage, platforms, and features. Read our expert analysis.`,
  };
}

export default async function ForexBrokerReview({ params }: Props) {
  const { slug } = await params;
  const brokers = getAllBrokers();
  const review = getReviewBySlug(slug);
  if (!review) notFound();
  let broker = brokers.find((b) => b.slug === review.brokerSlug);
  if (!broker) broker = defaultBrokerData.find((b) => b.slug === review.brokerSlug);
  if (broker && broker.type !== "Forex Broker") notFound();

  return (
    <ReviewPage
      review={review}
      broker={broker}
      categoryLink="/forex-broker"
      categoryName="Forex Brokers"
      badgeGradient="linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)"
      badgeLetter={broker?.name?.charAt(0) || "F"}
    />
  );
}
