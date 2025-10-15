import { createEffect, createSignal } from "solid-js";
import type { StockData } from "../types/stock";

interface StockRowProps {
  stock: StockData;
}

export default function StockRow(props: StockRowProps) {
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
    <div class={`stock-bar ${flash() ? "flash" : ""}`}>
      <div class="stock-info">
        <span class="stock-symbol">{props.stock.symbol}</span>
        <span class="stock-price">${props.stock.price.toFixed(2)}</span>
        <span class={`stock-change ${changeClass()}`}>
          {props.stock.change >= 0 ? "▲" : "▼"}
          <span>{Math.abs(props.stock.change).toFixed(2)}</span>
        </span>
        <span class={`stock-change-percent ${changeClass()}`}>
          {props.stock.changePercent.toFixed(2)}%
        </span>
        <span class="stock-volume">Vol: {props.stock.volume}</span>
      </div>
    </div>
  );
}
