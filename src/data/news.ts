import type { NewsItem } from "../types/news";

export const NEWS_DATA: NewsItem[] = [
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
  {
    id: "4",
    headline: "Startup acquisition sparks sector rally",
    summary:
      "A mid-sized cloud infrastructure startup agreed to be acquired by a strategic buyer, lifting several peers on acquisition hopes and consolidation chatter.",
    tickers: ["SNOW", "MDB"],
    source: "Bloomberg",
    date: "1d ago",
  },
  {
    id: "5",
    headline: "Retailers report mixed holiday guidance",
    summary:
      "Major retailers reported mixed same-store sales and issued cautious guidance for the holiday season amid shifting consumer patterns.",
    tickers: ["WMT", "TGT", "COST"],
    source: "CNBC",
    date: "3h ago",
  },
  {
    id: "6",
    headline: "Biotech stock surges after FDA breakthrough designation",
    summary:
      "The biotech firm received breakthrough therapy designation for its oncology candidate, sending the stock sharply higher on speculative buying.",
    tickers: ["NVS", "BNTX"],
    source: "FierceBiotech",
    date: "30m ago",
  },
  {
    id: "7",
    headline: "Auto makers accelerate EV investments",
    summary:
      "Several legacy automakers announced increased capital spending on electric vehicle programs, putting pressure on smaller EV pure-plays.",
    tickers: ["TSLA", "GM", "F"],
    source: "Automotive News",
    date: "5h ago",
  },
  {
    id: "8",
    headline: "Cryptocurrency market steadies after volatile session",
    summary:
      "Major cryptocurrencies pared early losses as traders assessed macro headlines and network upgrade news, restoring some calm.",
    tickers: ["BTC", "ETH"],
    source: "CoinDesk",
    date: "45m ago",
  },
  {
    id: "9",
    headline: "Airline stocks pressured by rising fuel costs",
    summary:
      "Higher jet fuel prices weighed on airline margins, with carriers trimming capacity outlooks for the quarter.",
    tickers: ["DAL", "UAL", "AAL"],
    source: "Reuters",
    date: "8h ago",
  },
  {
    id: "10",
    headline: "Major bank beats earnings estimates; outlook upbeat",
    summary:
      "One of the nation's largest banks surprised the market with stronger-than-expected net interest income, lifting regional peers.",
    tickers: ["JPM", "BAC", "C"],
    source: "Financial Times",
    date: "6h ago",
  },
];
