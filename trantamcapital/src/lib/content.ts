import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
      title: data.title || "Untitled",
      date: `${months[pubDate.getMonth()]} ${pubDate.getDate()}, ${pubDate.getFullYear()}`,
      category: data.category || "Markets",
      excerpt: data.excerpt || "",
      content: content.trim(),
      author: data.author || "TrantamCapital",
      image: data.image || undefined,
    } as NewsArticle;
  });
}

export function getAllNews(): NewsArticle[] {
  const cmsArticles = loadCmsArticles();
  // If CMS has articles, use ONLY CMS (static is fallback when no CMS)
  if (cmsArticles.length > 0) return cmsArticles;
  return staticNews;
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return getAllNews().find((a) => a.slug === slug);
}

export const categories = ["All", "Cryptocurrency", "Forex", "Binary Options", "Markets"];

export function getAllBrokers(): Broker[] {
  const contentDir = path.join(process.cwd(), "src/content/brokers");
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      name: data.name || "Untitled",
      type: data.type || "Forex Broker",
      rating: Number(data.rating) || 0,
      features: Array.isArray(data.features) ? data.features : [],
      reviewHref: data.reviewHref || "#",
      visitHref: data.visitHref || "#",
      gradient: data.gradient || undefined,
    } as Broker;
  });
}

export function getRecentPosts(count: number = 4): NewsArticle[] {
  return getAllNews().slice(0, count);
}
