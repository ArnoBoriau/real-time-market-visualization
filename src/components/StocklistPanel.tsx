import { For } from "solid-js";
import StockRow from "./StockRow";
import { useStocks } from "../context/StockContext";

export default function StocklistPanel() {
  const { allStocks, isWatched, toggleWatchlist } = useStocks();

  return (
    <div class="panel stocks-panel">
      <h2>Stock & Crypto Tracker</h2>
      <div class="stocks-list">
        <For each={allStocks()}>
          {(stock) => (
            <StockRow
              stock={stock}
              starred={stock ? isWatched(stock.symbol) : false}
              onToggleStar={toggleWatchlist}
            />
          )}
        </For>
      </div>
    </div>
  );
}
