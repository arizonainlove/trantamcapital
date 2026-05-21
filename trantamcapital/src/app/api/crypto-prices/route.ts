import { NextResponse } from "next/server";

const COIN_IDS =
  "bitcoin,ethereum,binancecoin,solana,ripple,cardano,dogecoin,polkadot,avalanche-2,matic-network,chainlink,litecoin";

let cache: { data: unknown; expiry: number } | null = null;

export async function GET() {
  if (cache && Date.now() < cache.expiry) {
    return NextResponse.json(cache.data);
  }

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`,
      { headers: { Accept: "application/json" }, next: { revalidate: 55 } },
    );

    if (!res.ok) {
      if (cache) return NextResponse.json(cache.data);
      return NextResponse.json({ error: "Failed" }, { status: 502 });
    }

    const data = await res.json();
    cache = { data, expiry: Date.now() + 55000 };
    return NextResponse.json(data);
  } catch {
    if (cache) return NextResponse.json(cache.data);
    return NextResponse.json({ error: "Failed" }, { status: 502 });
  }
}
