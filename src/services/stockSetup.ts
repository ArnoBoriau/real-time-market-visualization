import { createSignal } from "solid-js";
import type { StockData } from "../types/stock";

const STOCK_BASE_PRICES: Record<string, number> = {
  // Tech Stocks
  AAPL: 178.72,
  GOOGL: 141.8,
  MSFT: 378.91,
  AMZN: 145.86,
  TSLA: 242.84,
  META: 497.43,
  NFLX: 486.41,
  NVDA: 502.66,
  // Crypto
  BTC: 43250.0,
  ETH: 2280.0,
  SOL: 98.5,
  ADA: 0.58,
  DOT: 7.2,
  MATIC: 0.85,
  AVAX: 35.4,
  LINK: 14.8,
};

export const STOCK_SYMBOLS = Object.keys(STOCK_BASE_PRICES);

// Generate initial stock data
export const generateInitialStocks = (): StockData[] => {
  return STOCK_SYMBOLS.map((symbol, i) => {
    const basePrice = STOCK_BASE_PRICES[symbol];
    const variation = (Math.random() - 0.5) * 0.04; // -2% to +2%
    const price = basePrice * (1 + variation);

    return {
      id: `stock-${i}`,
      symbol,
      price,
      change: 0,
      changePercent: 0,
      volume: Math.floor(Math.random() * 10000000) + 1000000,
      lastUpdate: Date.now(),
      priceHistory: [price],
    };
  });
};

export const createStockSignals = () => {
  const stocks = generateInitialStocks();
  return stocks.map((stock) => createSignal(stock));
};
