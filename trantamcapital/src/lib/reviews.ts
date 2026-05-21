import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { defaultReviews, type ReviewContent, type ReviewFeature, type ReviewRating } from "@/data/reviews";

function parseReviewFile(filePath: string): ReviewContent | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug: path.basename(filePath, ".md"),
      brokerSlug: data.brokerSlug || "",
      pros: Array.isArray(data.pros) ? data.pros : [],
      cons: Array.isArray(data.cons) ? data.cons : [],
      keyFeatures: Array.isArray(data.keyFeatures) ? data.keyFeatures as ReviewFeature[] : [],
      ratingSummary: Array.isArray(data.ratingSummary) ? data.ratingSummary as ReviewRating[] : [],
      trustScore: Number(data.trustScore) || 0,
      content: content.trim(),
    };
  } catch {
    return null;
  }
}

export function getAllReviews(): ReviewContent[] {
  const contentDir = path.join(process.cwd(), "src/content/reviews");
  if (!fs.existsSync(contentDir)) return defaultReviews;

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"));

  if (files.length === 0) return defaultReviews;

  const reviews = files
    .map((file) => parseReviewFile(path.join(contentDir, file)))
    .filter((r): r is ReviewContent => r !== null);

  return reviews.length > 0 ? reviews : defaultReviews;
}

export function getReviewBySlug(slug: string): ReviewContent | undefined {
  const contentDir = path.join(process.cwd(), "src/content/reviews");
  const filePath = path.join(contentDir, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    const review = parseReviewFile(filePath);
    if (review) return review;
  }

  return defaultReviews.find((r) => r.slug === slug);
}
