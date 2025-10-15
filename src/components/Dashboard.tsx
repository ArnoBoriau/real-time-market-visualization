import "./Dashboard.css";

import RefreshControl from "./RefreshControl";
import WatchlistPanel from "./WatchlistPanel";
import TrendingPanel from "./TrendingPanel";
import StocklistPanel from "./StocklistPanel";

export default function Dashboard() {
  return (
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
        <RefreshControl />
      </div>

      <div class="dashboard-grid">
        <TrendingPanel />
        <div class="dashboard-panels">
          <div class="main-panel">
            <StocklistPanel />
          </div>
          <div class="side-panel">
            <WatchlistPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
