import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { allNews as staticNews, type NewsArticle } from "@/data/news";

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
    } as NewsArticle;
  });
}

export function getAllNews(): NewsArticle[] {
  const cmsArticles = loadCmsArticles();
  const seen = new Set<string>();
  // CMS articles take precedence over static ones
  return [...cmsArticles, ...staticNews].filter((a) => {
    if (seen.has(a.slug)) return false;
    seen.add(a.slug);
    return true;
  });
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return getAllNews().find((a) => a.slug === slug);
}

export const categories = ["All", "Cryptocurrency", "Forex", "Binary Options", "Markets"];

export function getRecentPosts(count: number = 4): NewsArticle[] {
  return getAllNews().slice(0, count);
}
