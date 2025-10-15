import "./StockPage.css";

import RefreshControl from "../RefreshControl";
import StocklistPanel from "../StocklistPanel";

export default function StockPage() {
  return (
    <div class="page">
      <div class="page-header">
        <h1>Stocks</h1>
        <RefreshControl />
      </div>
      <StocklistPanel />
    </div>
  );
}
