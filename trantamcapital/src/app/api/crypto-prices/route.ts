import { NextResponse } from "next/server";

const PAIRS: { id: string; symbol: string; name: string; coinId?: string }[] = [
  { id: "bitcoin", symbol: "BTC/USD", name: "Bitcoin", coinId: "bitcoin" },
  { id: "ethereum", symbol: "ETH/USD", name: "Ethereum", coinId: "ethereum" },
  { id: "binancecoin", symbol: "BNB/USD", name: "BNB", coinId: "binancecoin" },
  { id: "ripple", symbol: "XRP/USD", name: "XRP", coinId: "ripple" },
  { id: "solana", symbol: "SOL/USD", name: "Solana", coinId: "solana" },
  { id: "eur-usd", symbol: "EUR/USD", name: "Euro" },
  { id: "gbp-usd", symbol: "GBP/USD", name: "British Pound" },
  { id: "usd-jpy", symbol: "USD/JPY", name: "Japanese Yen" },
  { id: "eur-gbp", symbol: "EUR/GBP", name: "Euro/Pound" },
  { id: "xau-usd", symbol: "XAU/USD", name: "Gold" },
];

const CRYPTO_IDS = PAIRS.filter((p) => p.coinId).map((p) => p.coinId).join(",");

const yesterdayDate = () => {
  const d = new Date(Date.now() - 86400000);
  // Frankfurter API (ECB data) only has business day data
  d.setDate(d.getDate() - (d.getDay() === 0 ? 2 : d.getDay() === 6 ? 1 : 0));
  return d.toISOString().split("T")[0];
};

function calcChange(today: number, yesterday: number | null): number | null {
  if (yesterday === null || yesterday === 0) return null;
  return ((today - yesterday) / yesterday) * 100;
}

interface ForexData {
  price: number;
  prevPrice: number | null;
}

function parseForexPrices(
  todayData: { rates?: Record<string, number> } | null,
  prevData: { rates?: Record<string, number> } | null,
  symbol: string,
  compute: (rates: Record<string, number>) => number | null,
): ForexData {
  const todayPrice = todayData?.rates ? compute(todayData.rates) : null;
  const prevPrice = prevData?.rates ? compute(prevData.rates) : null;
  return { price: todayPrice ?? 0, prevPrice };
}

let cache: { data: unknown; expiry: number } | null = null;
let prevGoldPrice: number | null = null;

export async function GET() {
  if (cache && Date.now() < cache.expiry) {
    return NextResponse.json(cache.data);
  }

  try {
    const dateStr = yesterdayDate();
    const today = new Date();
    const marketsClosed = today.getDay() === 0 || today.getDay() === 6;

    const [cryptoRes, forexRes, forexPrevRes, eurGbpRes, eurGbpPrevRes] = await Promise.all([
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_IDS}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`,
        { headers: { Accept: "application/json" }, next: { revalidate: 55 } },
      ),
      fetch("https://api.frankfurter.dev/v1/latest?from=USD&to=EUR,GBP,JPY", {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.frankfurter.dev/v1/${dateStr}?from=USD&to=EUR,GBP,JPY`, {
        next: { revalidate: 3600 },
      }),
      fetch("https://api.frankfurter.dev/v1/latest?from=EUR&to=GBP", {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.frankfurter.dev/v1/${dateStr}?from=EUR&to=GBP`, {
        next: { revalidate: 3600 },
      }),
    ]);

    const cryptoMap: Record<string, { price: number; change: number; image: string }> = {};
    if (cryptoRes.ok) {
      const data = await cryptoRes.json();
      for (const coin of data) {
        cryptoMap[coin.id] = {
          price: coin.current_price,
          change: coin.price_change_percentage_24h ?? 0,
          image: coin.image,
        };
      }
    }

    const todayForex = forexRes.ok ? await forexRes.json() : null;
    const prevForex = forexPrevRes.ok ? await forexPrevRes.json() : null;
    const todayEurGbp = eurGbpRes.ok ? await eurGbpRes.json() : null;
    const prevEurGbp = eurGbpPrevRes.ok ? await eurGbpPrevRes.json() : null;

    const eurUsd = parseForexPrices(todayForex, prevForex, "EUR/USD", (r) =>
      r.EUR ? 1 / r.EUR : null,
    );
    const gbpUsd = parseForexPrices(todayForex, prevForex, "GBP/USD", (r) =>
      r.GBP ? 1 / r.GBP : null,
    );
    const usdJpy = parseForexPrices(todayForex, prevForex, "USD/JPY", (r) => r.JPY ?? null);
    const eurGbp = parseForexPrices(todayEurGbp, prevEurGbp, "EUR/GBP", (r) => r.GBP ?? null);

    const forexMap: Record<string, ForexData> = {
      "EUR/USD": eurUsd,
      "GBP/USD": gbpUsd,
      "USD/JPY": usdJpy,
      "EUR/GBP": eurGbp,
    };

    let goldPrice: number | null = null;
    let goldChange: number | null = null;
    try {
      const goldRes = await fetch("https://api.gold-api.com/price/XAU");
      if (goldRes.ok) {
        const goldData = await goldRes.json();
        goldPrice = goldData.price ?? null;
        if (goldPrice !== null && prevGoldPrice !== null && prevGoldPrice > 0) {
          goldChange = ((goldPrice - prevGoldPrice) / prevGoldPrice) * 100;
        }
        if (goldPrice !== null) prevGoldPrice = goldPrice;
      }
    } catch {
      // gold unavailable
    }

    const result = PAIRS.map((p) => {
      if (p.coinId && cryptoMap[p.coinId]) {
        const c = cryptoMap[p.coinId];
        return { id: p.id, symbol: p.symbol, name: p.name, price: c.price, change24h: c.change, image: c.image };
      }
      if (p.symbol in forexMap) {
        const f = forexMap[p.symbol];
        return {
          id: p.id,
          symbol: p.symbol,
          name: p.name,
          price: f.price,
          change24h: marketsClosed ? null : calcChange(f.price, f.prevPrice),
          image: null,
        };
      }
      if (p.id === "xau-usd") {
        return { id: p.id, symbol: p.symbol, name: p.name, price: goldPrice ?? 0, change24h: marketsClosed ? null : goldChange, image: null };
      }
      return { id: p.id, symbol: p.symbol, name: p.name, price: 0, change24h: null, image: null };
    });

    cache = { data: result, expiry: Date.now() + 55000 };
    return NextResponse.json(result);
  } catch {
    if (cache) return NextResponse.json(cache.data);
    const fallback = PAIRS.map((p) => ({
      id: p.id,
      symbol: p.symbol,
      name: p.name,
      price: 0,
      change24h: null,
      image: null,
    }));
    return NextResponse.json(fallback);
  }
}
