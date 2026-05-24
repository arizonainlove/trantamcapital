let prevPrice: number | null = null;

export async function GET() {
  try {
    const res = await fetch("https://api.gold-api.com/price/XAU");
    if (!res.ok) return Response.json({ price: null, change24h: null });
    const data = await res.json();
    const price: number | null = data.price ?? null;

    let change24h: number | null = null;
    if (price !== null && prevPrice !== null && prevPrice > 0) {
      change24h = ((price - prevPrice) / prevPrice) * 100;
    }
    if (price !== null) prevPrice = price;

    return Response.json({ price, change24h });
  } catch {
    return Response.json({ price: null, change24h: null });
  }
}
