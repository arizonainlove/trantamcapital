"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

interface MarketCoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

const TOP_COINS = "bitcoin,ethereum,binancecoin,solana,ripple,cardano,dogecoin,polkadot";

const formatPrice = (price: number) => {
  if (price >= 1) return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (price >= 0.01) return `$${price.toFixed(4)}`;
  return `$${price.toFixed(6)}`;
};

const formatMarketCap = (cap: number) => {
  if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
  if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`;
  if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`;
  return `$${cap.toLocaleString()}`;
};

export default function MarketOverview() {
  const [coins, setCoins] = useState<MarketCoin[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCoins = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${TOP_COINS}&order=market_cap_desc&sparkline=false&price_change_percentage_24h`,
      );
      if (!res.ok) throw new Error("Failed");
      const data: MarketCoin[] = await res.json();
      setCoins(data);
    } catch {
      // keep previous data if any
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 60000);
    return () => clearInterval(interval);
  }, [fetchCoins]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-12 bg-border rounded" />
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
            {coins.map((coin, i) => (
              <tr key={coin.id} className="border-b border-border hover:bg-section transition-colors">
                <td className="py-3 px-4 text-text-secondary">{i + 1}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={coin.image}
                      alt={coin.symbol}
                      width={22}
                      height={22}
                      className="rounded-full"
                    />
                    <span className="font-semibold text-text-primary">{coin.name}</span>
                    <span className="text-xs text-text-light uppercase">{coin.symbol}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right font-semibold text-text-primary">
                  {formatPrice(coin.current_price)}
                </td>
                <td
                  className={`py-3 px-4 text-right font-semibold ${
                    coin.price_change_percentage_24h >= 0 ? "text-success" : "text-error"
                  }`}
                >
                  <span className="flex items-center justify-end gap-1">
                    {coin.price_change_percentage_24h >= 0 ? (
                      <HiArrowSmUp className="text-xs" />
                    ) : (
                      <HiArrowSmDown className="text-xs" />
                    )}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-text-secondary">
                  {formatMarketCap(coin.market_cap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="min-w-[200px] p-4 rounded-lg border border-border bg-white snap-start shrink-0"
          >
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={coin.image}
                alt={coin.symbol}
                width={24}
                height={24}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-text-primary text-sm">{coin.name}</p>
                <p className="text-xs text-text-light uppercase">{coin.symbol}</p>
              </div>
            </div>
            <p className="text-lg font-bold text-text-primary mb-1">
              {formatPrice(coin.current_price)}
            </p>
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-semibold flex items-center gap-0.5 ${
                  coin.price_change_percentage_24h >= 0 ? "text-success" : "text-error"
                }`}
              >
                {coin.price_change_percentage_24h >= 0 ? (
                  <HiArrowSmUp />
                ) : (
                  <HiArrowSmDown />
                )}
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
              <span className="text-xs text-text-light">{formatMarketCap(coin.market_cap)}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
