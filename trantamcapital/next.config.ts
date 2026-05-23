import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // HSTS — bắt buộc HTTPS, chặn MITM
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Chặn clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Chặn MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Kiểm soát Referrer header
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Hạn chế quyền trình duyệt
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self';" +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval';" +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;" +
              "font-src 'self' https://fonts.gstatic.com;" +
              "img-src 'self' https://assets.coingecko.com https://coin-images.coingecko.com https://raw.githubusercontent.com data:;" +
              "connect-src 'self' https://api.github.com https://api.coingecko.com;" +
              "frame-src 'none';" +
              "object-src 'none';" +
              "base-uri 'self'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
