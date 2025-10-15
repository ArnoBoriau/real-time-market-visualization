import { For } from "solid-js";
import { useStocks } from "../../context/StockContext";
import "./StockPage.css";
import RefreshControl from "../RefreshControl";
import StockRowStar from "../StockRowStar";

export default function StockPage() {
  const { stockSignals, isWatched, toggleWatchlist } = useStocks();

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
              {([stock]) => (
                <StockRowStar
                  stock={stock()}
                  starred={isWatched(stock().symbol)}
                  onToggleStar={toggleWatchlist}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
