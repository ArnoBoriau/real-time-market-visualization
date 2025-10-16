import "./NewsPage.css";
import { For, createMemo } from "solid-js";

import RefreshControl from "../RefreshControl";
import type { NewsItem } from "../../types/news";
import NewsArticle from "../NewsArticle";
import { NEWS_DATA } from "../../data/news";

export default function NewsPage() {
  const items = createMemo(() => NEWS_DATA);

  return (
    <div class="page">
      <div class="page-header">
        <h1>News</h1>
        <RefreshControl />
      </div>

      <div class="news-feed">
        <h2>Latest Market News</h2>
        <div class="news-grid">
          <For each={items()}>{(it) => <NewsArticle item={it} />}</For>
        </div>
      </div>
    </div>
  );
}
