"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

interface TickerItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number | null;
  image: string | null;
}

const PAIR_PREFIX: Record<string, string> = {
  "EUR/USD": "$",
  "GBP/USD": "$",
  "USD/JPY": "¥",
  "EUR/GBP": "£",
  "XAU/USD": "$",
};

export default function PriceTicker() {
  const [items, setItems] = useState<TickerItem[]>([]);
  const [error, setError] = useState(false);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch(`/api/crypto-prices`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data: TickerItem[] = await res.json();
      setItems(data);
      setError(false);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  const formatPrice = useCallback((item: TickerItem) => {
    const prefix = PAIR_PREFIX[item.symbol] || "$";
    const price = item.price;
    if (price === 0) return "$0.00";
    if (price >= 1000)
      return `${prefix}${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (price >= 1) return `${prefix}${price.toFixed(2)}`;
    if (price >= 0.01) return `${prefix}${price.toFixed(4)}`;
    return `${prefix}${price.toFixed(6)}`;
  }, []);

  const tickerItems = useMemo(() => {
    if (items.length === 0) return null;
    return [...items, ...items].map((item, i) => (
      <div key={`${item.id}-${i}`} className="flex items-center gap-2 shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.symbol}
            width={16}
            height={16}
            className="rounded-full"
            loading="lazy"
          />
        ) : (
          <div className="w-4 h-4 rounded-full bg-primary-light flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-primary">
              {item.symbol.charAt(0)}
            </span>
          </div>
        )}
        <span className="text-sm font-semibold text-white">{item.symbol}</span>
        <span className="text-sm text-white">{formatPrice(item)}</span>
        {item.change24h !== null && (
          <span
            className={`text-xs flex items-center gap-0.5 ${
              item.change24h >= 0 ? "text-success" : "text-error"
            }`}
          >
            {item.change24h >= 0 ? (
              <HiArrowSmUp className="text-xs" />
            ) : (
              <HiArrowSmDown className="text-xs" />
            )}
            {Math.abs(item.change24h).toFixed(2)}%
          </span>
        )}
      </div>
    ));
  }, [items, formatPrice]);

  if (error && items.length === 0) {
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="bg-dark h-10 flex items-center overflow-hidden">
        <div className="flex gap-8 animate-pulse px-4">
          <span className="text-sm text-text-light">Loading prices...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark h-10 flex items-center overflow-hidden">
      <div className="flex whitespace-nowrap gap-16 animate-marquee px-4">
        {tickerItems}
      </div>
    </div>
  );
}
