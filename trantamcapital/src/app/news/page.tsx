import type { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "Market News",
  description: "Latest cryptocurrency, forex, and binary options news. Stay informed with market analysis and trading insights.",
};

export default function NewsPage() {
  return <NewsContent />;
}
