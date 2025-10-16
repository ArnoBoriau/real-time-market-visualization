import "./StockPage.css";
import { For } from "solid-js";

import { useStocks } from "../../context/StockContext";

import StockRow from "../StockRow";
import RefreshControl from "../RefreshControl";
import WatchlistPanel from "../WatchlistPanel";

export default function WatchlistPage() {
  const { allStocks, watchlist, toggleWatchlist } = useStocks();

  return (
    <div class="page">
      <div class="page-header">
        <h1>Watchlist</h1>
        <RefreshControl />
      </div>

      <div>
        <WatchlistPanel />
        <div class="panel stocks-panel" style="margin-top:1rem;">
          <h2>All Other Stocks</h2>
          <div class="stocks-list">
            <For
              each={allStocks().filter((s) => !watchlist().includes(s.symbol))}
            >
              {(s) => (
                <div class="stock-list-item">
                  <StockRow
                    stock={s}
                    starred={false}
                    onToggleStar={toggleWatchlist}
                  />
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
