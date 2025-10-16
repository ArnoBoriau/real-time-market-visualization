import "./pages/NewsPage.css";
import { For } from "solid-js";
import type { NewsItem } from "../types/news";

type Props = {
  item: NewsItem;
};

export default function NewsArticle(props: Props) {
  const it = props.item;

  return (
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
          <For each={it.tickers}>
            {(t) => <span class="ticker-pill">{t}</span>}
          </For>
        </div>
      )}
    </article>
  );
}
