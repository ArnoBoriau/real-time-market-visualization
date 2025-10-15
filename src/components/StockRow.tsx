import { createEffect, createSignal } from "solid-js";
import type { StockData } from "../types/stock";
import "./pages/StockPage.css";

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
        <div class="stock-identity">
          <div class="stock-identity-main">
            <span class="stock-symbol">{props.stock.symbol}</span>
            <span class={`stock-change stock-change-row ${changeClass()}`}>
              {props.stock.change >= 0 ? "▲" : "▼"}
              <span>{Math.abs(props.stock.change).toFixed(2)}</span>
            </span>
          </div>
          <span class="stock-volume-row">
            Vol: {(props.stock.volume / 1000000).toFixed(2)}M
          </span>
        </div>
        <div class="stock-price-group-row">
          <span class="stock-price-row">${props.stock.price.toFixed(2)}</span>
          <div class="stock-price-change">
            <span class={`stock-change-percent ${changeClass()}`}>
              {props.stock.changePercent.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
