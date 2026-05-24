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

let cache: { data: unknown; expiry: number } | null = null;

export async function GET() {
  if (cache && Date.now() < cache.expiry) {
    return NextResponse.json(cache.data);
  }

  try {
    const [cryptoRes, forexRes, eurGbpRes] = await Promise.all([
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_IDS}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`,
        { headers: { Accept: "application/json" }, next: { revalidate: 55 } },
      ),
      fetch("https://api.frankfurter.dev/latest?from=USD&to=EUR,GBP,JPY", {
        next: { revalidate: 3600 },
      }),
      fetch("https://api.frankfurter.dev/latest?from=EUR&to=GBP", {
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

    const forexPrices: Record<string, number> = {};
    if (forexRes.ok) {
      const usdData = await forexRes.json();
      if (usdData.rates?.EUR) forexPrices["EUR/USD"] = 1 / usdData.rates.EUR;
      if (usdData.rates?.GBP) forexPrices["GBP/USD"] = 1 / usdData.rates.GBP;
      if (usdData.rates?.JPY) forexPrices["USD/JPY"] = usdData.rates.JPY;
    }
    if (eurGbpRes.ok) {
      const eurGbpData = await eurGbpRes.json();
      if (eurGbpData.rates?.GBP) forexPrices["EUR/GBP"] = eurGbpData.rates.GBP;
    }

    let goldPrice: number | null = null;
    try {
      const goldRes = await fetch("https://data-asg.goldprice.org/dbXRates/USD");
      if (goldRes.ok) {
        const goldData = await goldRes.json();
        goldPrice = goldData.items?.[0]?.xauPrice ?? null;
      }
    } catch {
      // gold unavailable
    }

    const result = PAIRS.map((p) => {
      if (p.coinId && cryptoMap[p.coinId]) {
        const c = cryptoMap[p.coinId];
        return { id: p.id, symbol: p.symbol, name: p.name, price: c.price, change24h: c.change, image: c.image };
      }
      if (p.symbol in forexPrices) {
        return { id: p.id, symbol: p.symbol, name: p.name, price: forexPrices[p.symbol], change24h: null, image: null };
      }
      if (p.id === "xau-usd" && goldPrice !== null) {
        return { id: p.id, symbol: p.symbol, name: p.name, price: goldPrice, change24h: null, image: null };
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
