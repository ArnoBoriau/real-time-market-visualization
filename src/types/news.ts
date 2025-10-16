export type NewsItem = {
  id: string;
  headline: string;
  summary: string;
  tickers?: string[];
  source?: string;
  date?: string;
};
