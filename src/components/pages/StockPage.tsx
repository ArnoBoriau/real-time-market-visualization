import { For } from "solid-js";
import { useStocks } from "../../context/StockContext";
import StockRow from "../StockRow";
import "./StockPage.css";
import RefreshControl from "../RefreshControl";

export default function StockPage() {
  const { stockSignals, updateAllStocks } = useStocks();

  const handleRefresh = () => {
    updateAllStocks();
  };

  return (
    <div class="page">
      <div class="page-header">
        <h1>Stocks</h1>
        <RefreshControl />
      </div>

      <div>
        <div class="panel stocks-panel">
          <h2>Stock & Crypto Tracker</h2>
          <div class="stocks-list">
            <For each={stockSignals}>
              {([stock]) => <StockRow stock={stock()} />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
