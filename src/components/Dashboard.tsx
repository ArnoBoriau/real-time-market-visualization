import { For } from "solid-js";
import StockCard from "./StockCard";
import { createStockSignals } from "../services/stockSetup";
import "./Dashboard.css";

export default function Dashboard() {
  const stockSignals = createStockSignals();

  // update stocks
  const handleRefresh = () => {
    stockSignals.forEach(([stock, setStock]) => {
      const current = stock();

      const priceChange = (Math.random() - 0.5) * 10;
      const newPrice = Math.max(1, current.price + priceChange);
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

  return (
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>Real-Time Dashboard</h1>
        <button class="btn btn-primary" onClick={handleRefresh}>
          Refresh Prices
        </button>
      </div>

      <div class="dashboard-grid">
        <div class="panel stocks-panel">
          <h2>Stock & Crypto Tracker</h2>
          <div class="stocks-grid">
            <For each={stockSignals}>
              {([stock]) => <StockCard stock={stock()} />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
