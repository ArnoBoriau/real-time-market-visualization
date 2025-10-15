import { For, createSignal, createMemo } from "solid-js";
import { useStocks } from "../../context/StockContext";
import StockRow from "../StockRow";
import StockRowStar from "../StockRowStar";
import RefreshControl from "../RefreshControl";
import "./StockPage.css";
import "./WatchlistPage.css";

export default function WatchlistPage() {
  const { stockSignals } = useStocks();

  const [watchlist, setWatchlist] = createSignal<string[]>([]);

  const addToWatch = (symbol: string) => {
    setWatchlist((prev) => (prev.includes(symbol) ? prev : [...prev, symbol]));
  };

  const removeFromWatch = (symbol: string) => {
    setWatchlist((prev) => prev.filter((s) => s !== symbol));
  };

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
                No items selected yet. Add stocks from the list below.
              </p>
            ) : (
              <For each={watchedStocks()}>
                {(st) => (
                  <div>
                    <StockRowStar
                      stock={st!}
                      starred={true}
                      onToggleStar={() => removeFromWatch(st!.symbol)}
                    />
                    {/* <div class="watch-toggle">
                      <button onClick={() => removeFromWatch(st!.symbol)}>
                        Remove
                      </button>
                    </div> */}
                  </div>
                )}
              </For>
            )}
          </div>
        </div>

        <div class="panel stocks-panel" style="margin-top:1rem;">
          <h2>All Stocks</h2>
          <div class="stocks-list">
            <For
              each={allStocks().filter((s) => !watchlist().includes(s.symbol))}
            >
              {(s) => (
                <div class="stock-list-item">
                  <StockRowStar
                    stock={s}
                    starred={false}
                    onToggleStar={() => addToWatch(s.symbol)}
                  />
                  {/* <div class="watch-toggle">
                    <button onClick={() => addToWatch(s.symbol)}>Watch</button>
                  </div> */}
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
