import { useStocks } from "../context/StockContext";
import "./RefreshControl.css";

export default function RefreshControl() {
  const { refreshInterval, setRefreshInterval } = useStocks();

  const handleIntervalChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    setRefreshInterval(Number(target.value));
  };

  return (
    <div class="refresh-control">
      <label for="refresh-rate">Refresh Rate:</label>
      <select
        id="refresh-rate"
        class="refresh-selector"
        value={String(refreshInterval())}
        onChange={handleIntervalChange}
      >
        <option value="0">Off</option>
        <option value="50">50 ms</option>
        <option value="100">100 ms</option>
        <option value="500">500 ms</option>
        <option value="1000">1 second</option>
        <option value="5000">5 seconds</option>
        <option value="15000">15 seconds</option>
        <option value="30000">30 seconds</option>
        <option value="60000">1 minute</option>
        <option value="120000">2 minutes</option>
        <option value="300000">5 minutes</option>
      </select>
    </div>
  );
}
