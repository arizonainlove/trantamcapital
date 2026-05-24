let prevPrice: number | null = null;

export async function GET() {
  const today = new Date();
  const marketsClosed = today.getDay() === 0 || today.getDay() === 6;

  try {
    const res = await fetch("https://api.gold-api.com/price/XAU");
    if (!res.ok) return Response.json({ price: null, change24h: null });
    const data = await res.json();
    const price: number | null = data.price ?? null;

    let change24h: number | null = null;
    if (!marketsClosed && price !== null && prevPrice !== null && prevPrice > 0) {
      change24h = ((price - prevPrice) / prevPrice) * 100;
    }
    if (price !== null) prevPrice = price;

    return Response.json({ price, change24h });
  } catch {
    return Response.json({ price: null, change24h: null });
  }
}
