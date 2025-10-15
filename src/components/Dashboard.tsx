import { For } from "solid-js";
import StockCard from "./StockCard";
import RefreshControl from "./RefreshControl";
import { useStocks } from "../context/StockContext";
import "./Dashboard.css";

export default function Dashboard() {
  const { stockSignals } = useStocks();

  return (
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
        <RefreshControl />
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
