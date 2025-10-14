import { createContext, useContext, ParentComponent, Accessor } from "solid-js";
import { createSignal, Signal } from "solid-js";
import { generateInitialStocks } from "../services/stockSetup";
import type { StockData } from "../types/stock";

type StockSignal = Signal<StockData>;

interface StockContextValue {
  stockSignals: StockSignal[];
  updateStock: (index: number, updates: Partial<StockData>) => void;
  updateAllStocks: () => void;
}

const StockContext = createContext<StockContextValue>();

export const StockProvider: ParentComponent = (props) => {
  const stocks = generateInitialStocks();
  const stockSignals: StockSignal[] = stocks.map((stock) =>
    createSignal(stock)
  );

  // Update a single stock
  const updateStock = (index: number, updates: Partial<StockData>) => {
    const [stock, setStock] = stockSignals[index];
    setStock({
      ...stock(),
      ...updates,
      lastUpdate: Date.now(),
    });
  };

  const updateAllStocks = () => {
    stockSignals.forEach(([stock, setStock], index) => {
      const current = stock();

      const isCrypto = [
        "BTC",
        "ETH",
        "SOL",
        "ADA",
        "DOT",
        "MATIC",
        "AVAX",
        "LINK",
      ].includes(current.symbol);
      const volatility = isCrypto ? 0.02 : 0.01; // Crypto is more volatile

      const priceChange =
        (Math.random() - 0.5) * 2 * volatility * current.price;
      const newPrice = Math.max(
        current.price * 0.01,
        current.price + priceChange
      );
      const change = newPrice - current.price;
      const changePercent = (change / current.price) * 100;

      setStock({
        ...current,
        price: newPrice,
        change,
        changePercent,
        volume: current.volume + Math.floor(Math.random() * 10000),
        lastUpdate: Date.now(),
      });
    });
  };

  const value: StockContextValue = {
    stockSignals,
    updateStock,
    updateAllStocks,
  };

  return (
    <StockContext.Provider value={value}>
      {props.children}
    </StockContext.Provider>
  );
};

export const useStocks = () => {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error("useStocks must be used within a StockProvider");
  }
  return context;
};
