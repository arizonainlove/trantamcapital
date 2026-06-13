import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sanitize } from "@/lib/sanitize";
import { allNews as staticNews, type NewsArticle } from "@/data/news";
import type { Broker } from "@/data/brokers";

function loadCmsArticles(): NewsArticle[] {
  const contentDir = path.join(process.cwd(), "src/content/news");
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = matter(raw);
    const pubDate = data.date ? new Date(data.date) : new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return {
      slug: file.replace(/\.md$/, ""),
      title: sanitize(data.title) || "Untitled",
      date: `${months[pubDate.getMonth()]} ${pubDate.getDate()}, ${pubDate.getFullYear()}`,
      category: sanitize(data.category) || "Markets",
      excerpt: sanitize(data.excerpt) || "",
      content: sanitize(content.trim()),
      author: sanitize(data.author) || "ProTradeVision",
      image: data.image || undefined,
    } as NewsArticle;
  });
}

export interface GuideArticle {
  slug: string;
  title: string;
  platform: string;
  date: string;
  author: string;
  image?: string;
  excerpt: string;
  content: string;
}

export function getAllNews(): NewsArticle[] {
  const cmsArticles = loadCmsArticles();
  if (cmsArticles.length > 0) return cmsArticles;
  return staticNews;
}

export function getAllGuides(): GuideArticle[] {
  const contentDir = path.join(process.cwd(), "src/content/guides");
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"));

  const guides = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = matter(raw);
    const pubDate = data.date ? new Date(data.date) : new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return {
      slug: file.replace(/\.md$/, ""),
      title: sanitize(data.title) || "Untitled",
      platform: sanitize(data.platform) || "",
      date: `${months[pubDate.getMonth()]} ${pubDate.getDate()}, ${pubDate.getFullYear()}`,
      author: sanitize(data.author) || "ProTradeVision",
      image: data.image || undefined,
      excerpt: sanitize(data.excerpt) || "",
      content: sanitize(content.trim()),
    } as GuideArticle;
  });

  return guides.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export function getGuidesByPlatform(platform: string): GuideArticle[] {
  return getAllGuides().filter((g) => g.platform === platform);
}

function platformToCategory(platform: string): NewsArticle["category"] {
  const map: Record<string, NewsArticle["category"]> = {
    "crypto-exchange": "Cryptocurrency",
    "forex-broker": "Forex",
    "binary-option": "Binary Options",
    "proprietry-trading-firm": "Proprietary Trading Firm",
  };
  return map[platform] || "Markets";
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  const news = getAllNews().find((a) => a.slug === slug);
  if (news) return news;
  // Fallback to guides (e.g. crypto exchange guides rendered via news/[slug])
  const guide = getAllGuides().find((g) => g.slug === slug);
  if (guide) {
    return {
      slug: guide.slug,
      title: guide.title,
      date: guide.date,
      category: platformToCategory(guide.platform),
      excerpt: guide.excerpt,
      content: guide.content,
      author: guide.author,
      image: guide.image,
    };
  }
  return undefined;
}

export const categories = ["All", "Cryptocurrency", "Forex", "Binary Options", "Markets", "Proprietary Trading Firm"];

function parseOptional(data: Record<string, unknown>, key: string): string | undefined {
  const val = data[key];
  return val && typeof val === "string" && val.length > 0 ? val : undefined;
}

function parseStringArray(data: Record<string, unknown>, key: string): string[] | undefined {
  const val = data[key];
  if (Array.isArray(val)) return val.map((v: string) => sanitize(v)).filter(Boolean);
  return undefined;
}

export function getAllBrokers(): Broker[] {
  const contentDir = path.join(process.cwd(), "src/content/brokers");
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"));

  const brokers = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      name: sanitize(data.name) || "Untitled",
      type: sanitize(data.type) || "Forex Broker",
      rating: Number(data.rating) || 0,
      features: Array.isArray(data.features) ? data.features.map((f: string) => sanitize(f)) : [],
      reviewHref: data.reviewHref || "#",
      visitHref: data.visitHref || "#",
      gradient: data.gradient || undefined,
      logo: parseOptional(data, "logo"),
      highlights: parseStringArray(data, "highlights"),
      regulation: parseOptional(data, "regulation"),
      minDeposit: parseOptional(data, "minDeposit"),
      spread: parseOptional(data, "spread"),
      leverage: parseOptional(data, "leverage"),
      platforms: parseOptional(data, "platforms"),
      tradingFees: parseOptional(data, "tradingFees"),
      security: parseOptional(data, "security"),
      exchangeFeatures: parseOptional(data, "exchangeFeatures"),
      coins: parseOptional(data, "coins"),
      payout: parseOptional(data, "payout"),
      expiryTypes: parseOptional(data, "expiryTypes"),
      assets: parseOptional(data, "assets"),
      order: data.order ? Number(data.order) : undefined,
      // New Excel-derived fields
      scalping: parseOptional(data, "scalping"),
      eaBot: parseOptional(data, "eaBot"),
      withdrawals: parseOptional(data, "withdrawals"),
      goldTrading: parseOptional(data, "goldTrading"),
      bonusPrograms: parseOptional(data, "bonusPrograms"),
      vietnamSuitability: parseOptional(data, "vietnamSuitability"),
      futures: parseOptional(data, "futures"),
      spot: parseOptional(data, "spot"),
      copyTrading: parseOptional(data, "copyTrading"),
      web3: parseOptional(data, "web3"),
      affiliateProgram: parseOptional(data, "affiliateProgram"),
      popularity: parseOptional(data, "popularity"),
      cryptoSupport: parseOptional(data, "cryptoSupport"),
      binaryCopyTrading: parseOptional(data, "binaryCopyTrading"),
      profitSplit: parseOptional(data, "profitSplit"),
      evaluationFee: parseOptional(data, "evaluationFee"),
      maxCapital: parseOptional(data, "maxCapital"),
      tradingPlatforms: parseOptional(data, "tradingPlatforms"),
      instruments: parseOptional(data, "instruments"),
      propLeverage: parseOptional(data, "propLeverage"),
      evaluationType: parseOptional(data, "evaluationType"),
      dailyLossLimit: parseOptional(data, "dailyLossLimit"),
      profitTarget: parseOptional(data, "profitTarget"),
      refundPolicy: parseOptional(data, "refundPolicy"),
    } as Broker;
  });

  brokers.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return a.name.localeCompare(b.name);
  });

  return brokers;
}

export function getRecentPosts(count: number = 4): NewsArticle[] {
  return getAllNews().slice(0, count);
}
