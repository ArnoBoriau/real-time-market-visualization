import { For, createMemo } from "solid-js";
import { useStocks } from "../../context/StockContext";
import StockRowStar from "../StockRowStar";
import RefreshControl from "../RefreshControl";
import "./StockPage.css";

export default function WatchlistPage() {
  const { stockSignals, watchlist, isWatched, toggleWatchlist } = useStocks();

  const allStocks = createMemo(() => stockSignals.map(([s]) => s()));

  const watchedStocks = createMemo(() =>
    watchlist()
      .map((sym) => allStocks().find((st) => st.symbol === sym))
      .filter(Boolean)
  );

  return (
    <div class="page">
      <div class="page-header">
        <h1>Watchlist</h1>
        <RefreshControl />
      </div>

      <div>
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
        <div class="panel stocks-panel" style="margin-top:1rem;">
          <h2>All Other Stocks</h2>
          <div class="stocks-list">
            <For
              each={allStocks().filter((s) => !watchlist().includes(s.symbol))}
            >
              {(s) => (
                <div class="stock-list-item">
                  <StockRowStar
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
