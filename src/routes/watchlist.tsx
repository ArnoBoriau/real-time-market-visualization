import { Title } from "@solidjs/meta";
import MainLayout from "../layout/MainLayout";
import WatchlistPage from "~/components/pages/WatchlistPage";

export default function Watchlist() {
  return (
    <MainLayout>
      <Title>Watchlist</Title>
      <WatchlistPage />
    </MainLayout>
  );
}
