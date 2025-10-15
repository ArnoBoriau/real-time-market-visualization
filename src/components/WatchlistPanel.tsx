import { For } from "solid-js";
import StockRowStar from "./StockRowStar";
import { useStocks } from "../context/StockContext";

export default function WatchlistPanel() {
  const { watchedStocks, watchlist, toggleWatchlist } = useStocks();

  return (
    <div class="panel stocks-panel">
      <h2>Your Watchlist</h2>

      <div class="stocks-list">
        {watchlist().length === 0 ? (
          <p class="muted">
            No items selected yet. Star stocks to add them here.
          </p>
        ) : (
          <For each={watchedStocks()}>
            {(st) => (
              <StockRowStar
                stock={st!}
                starred={true}
                onToggleStar={toggleWatchlist}
              />
            )}
          </For>
        )}
      </div>
    </div>
  );
}
