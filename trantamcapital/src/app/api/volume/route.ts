import { NextResponse } from "next/server";

const PAIRS: { symbol: string; yahoo: string }[] = [
  // Forex: Yahoo Finance returns 0 volume (OTC market), kept for future compatibility
  { symbol: "EUR/USD", yahoo: "EURUSD=X" },
  { symbol: "GBP/USD", yahoo: "GBPUSD=X" },
  { symbol: "USD/JPY", yahoo: "USDJPY=X" },
  { symbol: "EUR/GBP", yahoo: "EURGBP=X" },
  // Gold: use GC futures for volume, then convert to dollar volume
  { symbol: "XAU/USD", yahoo: "GC=F" },
];

let cache: { data: Record<string, number | null>; expiry: number } | null = null;

export async function GET() {
  if (cache && Date.now() < cache.expiry) {
    return NextResponse.json(cache.data);
  }

  const results: Record<string, number | null> = {};

  await Promise.all(
    PAIRS.map(async ({ symbol, yahoo }) => {
      try {
        const res = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${yahoo}?interval=1d&range=5d`,
          { next: { revalidate: 3600 } },
        );
        if (!res.ok) { results[symbol] = null; return; }
        const data = await res.json();
        const result = data?.chart?.result?.[0];
        if (!result) { results[symbol] = null; return; }
        const quote = result.indicators?.quote?.[0];
        if (!quote?.volume) { results[symbol] = null; return; }
        const volumes: number[] = quote.volume.filter((v: number) => v > 0);
        const rawVolume = volumes.length ? volumes[volumes.length - 1] : null;
        if (rawVolume === null) { results[symbol] = null; return; }
        // For gold futures, convert contract volume to dollar volume
        // Each GC contract = 100 troy ounces
        if (symbol === "XAU/USD") {
          const price = result.meta?.regularMarketPrice;
          results[symbol] = price ? rawVolume * 100 * price : rawVolume;
        } else {
          results[symbol] = rawVolume;
        }
      } catch {
        results[symbol] = null;
      }
    }),
  );

  cache = { data: results, expiry: Date.now() + 300000 };
  return NextResponse.json(results);
}
