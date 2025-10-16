import "./NewsPage.css";
import { For, createMemo } from "solid-js";

import RefreshControl from "../RefreshControl";
import type { NewsItem } from "../../types/news";

const SAMPLE: NewsItem[] = [
  {
    id: "1",
    headline: "Tech giants lead a midday rally",
    summary:
      "Large-cap technology names rose today after a series of positive earnings reports, lifting broader indices.",
    tickers: ["AAPL", "MSFT", "GOOG"],
    source: "MarketWatch",
    date: "2h ago",
  },
  {
    id: "2",
    headline: "Energy stocks climb on supply concerns",
    summary:
      "Crude inventories came in lower than expected, sending oil and energy names higher on the session.",
    tickers: ["XOM", "CVX"],
    source: "Reuters",
    date: "4h ago",
  },
  {
    id: "3",
    headline: "Central bank keeps rates steady; commentary mixed",
    summary:
      "The central bank opted to hold rates, but guidance suggests rate cuts are still uncertain for the rest of the year.",
    tickers: ["^IRX"],
    source: "WSJ",
    date: "6h ago",
  },
];

export default function NewsPage() {
  const items = createMemo(() => SAMPLE);

  return (
    <div class="page">
      <div class="page-header">
        <h1>News</h1>
        <RefreshControl />
      </div>

      <div class="news-feed">
        <h2>Latest Market News Picks</h2>
        <div class="news-grid">
          <For each={items()}>
            {(it) => (
              <article class="news-card">
                <div class="news-top">
                  <header class="news-card-head">
                    <div class="news-meta">
                      <span class="news-source">{it.source}</span>
                      <span class="news-date">{it.date}</span>
                    </div>
                    <h3 class="news-headline">{it.headline}</h3>
                  </header>
                  <p class="news-summary">{it.summary}</p>
                </div>
                {it.tickers && (
                  <div class="news-tickers">
                    {it.tickers.map((t) => (
                      <span class="ticker-pill">{t}</span>
                    ))}
                  </div>
                )}
              </article>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
