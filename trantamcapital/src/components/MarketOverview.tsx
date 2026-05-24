"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

interface MarketRow {
  id: string;
  symbol: string;
  name: string;
  price: number | null;
  change24h: number | null;
  marketCap: number | null;
  image?: string;
}

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

const FOREX_DISPLAY: Record<string, string> = {
  "EUR/USD": "$",
  "GBP/USD": "$",
  "USD/JPY": "¥",
  "EUR/GBP": "£",
};

const formatPrice = (price: number | null) => {
  if (price === null) return "-";
  if (price >= 1000)
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  if (price >= 0.01) return `$${price.toFixed(4)}`;
  return `$${price.toFixed(6)}`;
};

const formatMarketCap = (cap: number | null) => {
  if (cap === null) return "-";
  if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
  if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`;
  if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`;
  return `$${cap.toLocaleString()}`;
};

export default function MarketOverview() {
  const [rows, setRows] = useState<MarketRow[]>(() =>
    PAIRS.map((p) => ({
      id: p.id,
      symbol: p.symbol,
      name: p.name,
      price: null,
      change24h: null,
      marketCap: null,
    })),
  );
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const yesterday = new Date(Date.now() - 86400000);
      const dateStr = yesterday.toISOString().split("T")[0];

      const [cryptoRes, usdForexRes, usdForexPrevRes, eurGbpRes, eurGbpPrevRes] = await Promise.all([
        fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_IDS}&order=market_cap_desc&sparkline=false&price_change_percentage_24h`,
        ),
        fetch("https://api.frankfurter.dev/v1/latest?from=USD&to=EUR,GBP,JPY"),
        fetch(`https://api.frankfurter.dev/v1/${dateStr}?from=USD&to=EUR,GBP,JPY`),
        fetch("https://api.frankfurter.dev/v1/latest?from=EUR&to=GBP"),
        fetch(`https://api.frankfurter.dev/v1/${dateStr}?from=EUR&to=GBP`),
      ]);

      const cryptoMap: Record<string, { price: number; change: number; cap: number; image: string }> = {};
      if (cryptoRes.ok) {
        const data = await cryptoRes.json();
        for (const coin of data) {
          cryptoMap[coin.id] = {
            price: coin.current_price,
            change: coin.price_change_percentage_24h,
            cap: coin.market_cap,
            image: coin.image,
          };
        }
      }

      const calcChange = (today: number | null, yesterday: number | null): number | null => {
        if (today === null || yesterday === null || yesterday === 0) return null;
        return ((today - yesterday) / yesterday) * 100;
      };

      const todayForex = usdForexRes.ok ? await usdForexRes.json() : null;
      const prevForex = usdForexPrevRes.ok ? await usdForexPrevRes.json() : null;
      const todayEurGbp = eurGbpRes.ok ? await eurGbpRes.json() : null;
      const prevEurGbp = eurGbpPrevRes.ok ? await eurGbpPrevRes.json() : null;

      const getForexPrice = (data: { rates?: Record<string, number> } | null, key: string, invert: boolean): number | null => {
        if (!data?.rates?.[key]) return null;
        return invert ? 1 / data.rates[key] : data.rates[key];
      };

      interface ForexInfo { price: number | null; prevPrice: number | null }
      const forexData: Record<string, ForexInfo> = {
        "EUR/USD": { price: getForexPrice(todayForex, "EUR", true), prevPrice: getForexPrice(prevForex, "EUR", true) },
        "GBP/USD": { price: getForexPrice(todayForex, "GBP", true), prevPrice: getForexPrice(prevForex, "GBP", true) },
        "USD/JPY": { price: getForexPrice(todayForex, "JPY", false), prevPrice: getForexPrice(prevForex, "JPY", false) },
        "EUR/GBP": { price: getForexPrice(todayEurGbp, "GBP", false), prevPrice: getForexPrice(prevEurGbp, "GBP", false) },
      };

      let goldPrice: number | null = null;
      let goldChange: number | null = null;
      try {
        const goldRes = await fetch("/api/gold");
        if (goldRes.ok) {
          const goldData = await goldRes.json();
          goldPrice = goldData.price ?? null;
          goldChange = goldData.change24h ?? null;
        }
      } catch {
        // gold unavailable
      }

      const newRows: MarketRow[] = PAIRS.map((p) => {
        if (p.coinId && cryptoMap[p.coinId]) {
          const c = cryptoMap[p.coinId];
          return {
            id: p.id,
            symbol: p.symbol,
            name: p.name,
            price: c.price,
            change24h: c.change,
            marketCap: c.cap,
            image: c.image,
          };
        }
        if (p.symbol in forexData) {
          const f = forexData[p.symbol];
          const change24h = calcChange(f.price, f.prevPrice);
          return {
            id: p.id,
            symbol: p.symbol,
            name: p.name,
            price: f.price,
            change24h,
            marketCap: null,
          };
        }
        if (p.id === "xau-usd") {
          return {
            id: p.id,
            symbol: p.symbol,
            name: p.name,
            price: goldPrice,
            change24h: goldChange,
            marketCap: null,
          };
        }
        return { id: p.id, symbol: p.symbol, name: p.name, price: null, change24h: null, marketCap: null };
      });

      setRows(newRows);
    } catch {
      // keep previous data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60_000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const changeIsPositive = (val: number | null) => val !== null && val >= 0;
  const changeClass = (val: number | null) => (changeIsPositive(val) ? "text-success" : "text-error");
  const changeArrow = (val: number | null) =>
    changeIsPositive(val) ? <HiArrowSmUp className="text-xs" /> : <HiArrowSmDown className="text-xs" />;
  const changeText = (val: number | null) =>
    val !== null ? `${Math.abs(val).toFixed(2)}%` : "—";

  const renderPrice = (row: MarketRow) => {
    if (row.price === null) return "-";
    const prefix = FOREX_DISPLAY[row.symbol] || "$";
    const price = row.price;
    if (price >= 1000)
      return `${prefix}${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (price >= 1) return `${prefix}${price.toFixed(2)}`;
    if (price >= 0.01) return `${prefix}${price.toFixed(4)}`;
    return `${prefix}${price.toFixed(6)}`;
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-10 border-b border-border" />
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-[46px] border-b border-border" />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-text-secondary font-semibold">#</th>
              <th className="text-left py-3 px-4 text-text-secondary font-semibold">Name</th>
              <th className="text-right py-3 px-4 text-text-secondary font-semibold">Price</th>
              <th className="text-right py-3 px-4 text-text-secondary font-semibold">24h Change</th>
              <th className="text-right py-3 px-4 text-text-secondary font-semibold">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.id}
                className="border-b border-border hover:bg-section transition-colors"
              >
                <td className="py-3 px-4 text-text-secondary">{i + 1}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {row.image ? (
                      <Image
                        src={row.image}
                        alt={row.symbol}
                        width={22}
                        height={22}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-[22px] h-[22px] rounded-full bg-primary-light flex items-center justify-center">
                        <span className="text-[10px] font-bold text-primary">
                          {row.symbol.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="font-semibold text-text-primary">{row.name}</span>
                    <span className="text-xs text-text-light">{row.symbol}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right font-semibold text-text-primary">
                  {renderPrice(row)}
                </td>
                <td
                  className={`py-3 px-4 text-right font-semibold ${changeClass(row.change24h)}`}
                >
                  <span className="flex items-center justify-end gap-1">
                    {row.change24h !== null ? changeArrow(row.change24h) : null}
                    {changeText(row.change24h)}
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-text-secondary">
                  {formatMarketCap(row.marketCap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {rows.map((row) => (
          <div
            key={row.id}
            className="min-w-[200px] p-4 rounded-lg border border-border bg-white snap-start shrink-0"
          >
            <div className="flex items-center gap-2 mb-3">
              {row.image ? (
                <Image
                  src={row.image}
                  alt={row.symbol}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <div className="w-[24px] h-[24px] rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-[11px] font-bold text-primary">
                    {row.symbol.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p className="font-semibold text-text-primary text-sm">{row.name}</p>
                <p className="text-xs text-text-light">{row.symbol}</p>
              </div>
            </div>
            <p className="text-lg font-bold text-text-primary mb-1">{renderPrice(row)}</p>
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-semibold flex items-center gap-0.5 ${changeClass(row.change24h)}`}
              >
                {row.change24h !== null ? changeArrow(row.change24h) : null}
                {changeText(row.change24h)}
              </span>
              {row.marketCap !== null && (
                <span className="text-xs text-text-light">{formatMarketCap(row.marketCap)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
