export async function GET() {
  try {
    const res = await fetch("https://data-asg.goldprice.org/dbXRates/USD");
    if (!res.ok) return Response.json({ price: null, change24h: null });
    const data = await res.json();
    return Response.json({
      price: data.items?.[0]?.xauPrice ?? null,
      change24h: data.items?.[0]?.pcGold ?? null,
    });
  } catch {
    return Response.json({ price: null, change24h: null });
  }
}
