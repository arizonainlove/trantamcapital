"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

interface CoinData {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

const COIN_IDS =
  "bitcoin,ethereum,binancecoin,solana,ripple,cardano,dogecoin,polkadot,avalanche-2,matic-network,chainlink,litecoin";

export default function PriceTicker() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [error, setError] = useState(false);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`,
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data: CoinData[] = await res.json();
      setCoins(data);
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

  const formatPrice = (price: number) => {
    if (price >= 1) return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (price >= 0.01) return `$${price.toFixed(4)}`;
    return `$${price.toFixed(6)}`;
  };

  if (error && coins.length === 0) {
    return null;
  }

  if (coins.length === 0) {
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
        {/* Duplicate for seamless loop */}
        {[...coins, ...coins].map((coin, i) => (
          <div key={`${coin.id}-${i}`} className="flex items-center gap-2 shrink-0">
            <Image
              src={coin.image}
              alt={coin.symbol}
              width={16}
              height={16}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-white uppercase">
              {coin.symbol}
            </span>
            <span className="text-sm text-white">{formatPrice(coin.current_price)}</span>
            <span
              className={`text-xs flex items-center gap-0.5 ${
                coin.price_change_percentage_24h >= 0 ? "text-success" : "text-error"
              }`}
            >
              {coin.price_change_percentage_24h >= 0 ? (
                <HiArrowSmUp className="text-xs" />
              ) : (
                <HiArrowSmDown className="text-xs" />
              )}
              {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
