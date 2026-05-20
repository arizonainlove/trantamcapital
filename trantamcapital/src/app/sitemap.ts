import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trantamcapital.com";

  const pages = [
    { path: "", priority: 1.0 },
    { path: "/news", priority: 0.9 },
    { path: "/for-beginners", priority: 0.8 },
    { path: "/investment-analysis", priority: 0.8 },
    { path: "/forex-broker", priority: 0.9 },
    { path: "/forex-broker/broker-a", priority: 0.7 },
    { path: "/forex-broker/broker-b", priority: 0.7 },
    { path: "/forex-broker/broker-c", priority: 0.7 },
    { path: "/crypto-exchange", priority: 0.9 },
    { path: "/crypto-exchange/exchange-a", priority: 0.7 },
    { path: "/crypto-exchange/exchange-b", priority: 0.7 },
    { path: "/crypto-exchange/exchange-c", priority: 0.7 },
    { path: "/binary-option", priority: 0.8 },
    { path: "/binary-option/platform-a", priority: 0.7 },
    { path: "/tools", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    { path: "/privacy-policy", priority: 0.4 },
    { path: "/terms-of-service", priority: 0.4 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));
}
