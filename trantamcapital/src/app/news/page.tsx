import type { Metadata } from "next";
import { getAllNews, getRecentPosts, categories } from "@/lib/content";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "Market News",
  description: "Latest cryptocurrency, forex, and binary options news. Stay informed with market analysis and trading insights.",
};

export default function NewsPage() {
  const allNews = getAllNews();
  const recentPosts = getRecentPosts(4);
  return <NewsContent allNews={allNews} categories={categories} recentPosts={recentPosts} />;
}
