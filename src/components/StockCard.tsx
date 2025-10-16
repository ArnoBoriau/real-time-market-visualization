import { createSignal, createEffect } from "solid-js";
import type { StockData } from "../types/stock";
import Sparkline from "./Sparkline";

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

  const sparkColor = () => {
    if (props.stock.changePercent > 0) return "#16a34a";
    if (props.stock.changePercent < 0) return "#ef4444";
    return "#6b7280";
  };

  return (
    <div class={`stock-card ${flash() ? "flash" : ""}`}>
      <div class="stockcard-info">
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
      <div class="stock-spark">
        <Sparkline
          data={props.stock.priceHistory}
          color={sparkColor()}
          height={36}
        />
      </div>
    </div>
  );
}
