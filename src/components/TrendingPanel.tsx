import { For, createMemo } from "solid-js";
import StockCard from "./StockCard";

import { useStocks } from "../context/StockContext";

export default function TrendingPanel() {
  const { allStocks } = useStocks();

  const randomSample = createMemo(() => allStocks().slice(0, 4));

  return (
    <div class="panel stocks-panel">
      <h2>Trending</h2>
      <div class="stocks-grid">
        <For each={randomSample()}>
          {(stock) => <StockCard stock={stock} />}
        </For>
      </div>
    </div>
  );
}
