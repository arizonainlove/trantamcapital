import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceTicker from "@/components/PriceTicker";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-primary",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trantamcapital.vercel.app"),
  title: {
    default: "TrantamCapital — Trade Smarter, Invest Wiser",
    template: "%s | TrantamCapital",
  },
  description:
    "Expert forex broker reviews, crypto exchange comparisons, binary options guides, and market analysis. Make informed trading decisions with TrantamCapital.",
  openGraph: {
    title: "TrantamCapital — Trade Smarter, Invest Wiser",
    description:
      "Expert forex broker reviews, crypto exchange comparisons, and market analysis.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${roboto.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans text-text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        <Header />
        <PriceTicker />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
