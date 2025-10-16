import { Title } from "@solidjs/meta";
import MainLayout from "../layout/MainLayout";
import NewsPage from "~/components/pages/NewsPage";

export default function News() {
  return (
    <MainLayout>
      <Title>News Feed</Title>
      <NewsPage />
    </MainLayout>
  );
}
