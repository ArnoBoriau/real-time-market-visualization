import { For } from "solid-js";
import StockCard from "./StockCard";
import { useStocks } from "../context/StockContext";
import "./Dashboard.css";

export default function Dashboard() {
  const { stockSignals, updateAllStocks } = useStocks();

  const handleRefresh = () => {
    updateAllStocks();
  };

  return (
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
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
