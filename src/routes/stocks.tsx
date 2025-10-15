import { Title } from "@solidjs/meta";
import MainLayout from "../layout/MainLayout";
import StockPage from "~/components/pages/StockPage";

export default function Stocks() {
  return (
    <MainLayout>
      <Title>Stocks</Title>
      <StockPage />
    </MainLayout>
  );
}
