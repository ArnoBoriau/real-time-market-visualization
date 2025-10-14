import { createSignal, createEffect } from "solid-js";
import type { StockData } from "../types/stock";

interface StockCardProps {
  stock: StockData;
}

export default function StockCard(props: StockCardProps) {
  const [flash, setFlash] = createSignal(false);

  createEffect(() => {
    props.stock.lastUpdate;
    setFlash(true);
    setTimeout(() => setFlash(false), 300);
  });

  const changeClass = () => {
    if (props.stock.changePercent > 0) return "positive";
    if (props.stock.changePercent < 0) return "negative";
    return "neutral";
  };

  return (
    <div class={`stock-card ${flash() ? "flash" : ""}`}>
      <div class="stock-symbol">{props.stock.symbol}</div>
      <div class="stock-price">${props.stock.price.toFixed(2)}</div>
      <div class={`stock-change ${changeClass()}`}>
        <span>{props.stock.change >= 0 ? "▲" : "▼"}</span>
        <span>{Math.abs(props.stock.changePercent).toFixed(2)}%</span>
      </div>
      <div class="stock-volume">
        Vol: {(props.stock.volume / 1000000).toFixed(2)}M
      </div>
    </div>
  );
}
