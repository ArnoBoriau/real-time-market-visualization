import { Title } from "@solidjs/meta";
import MainLayout from "../../layout/MainLayout";

export default function Controls() {
  return (
    <MainLayout>
      <Title>Controls</Title>
      <h1>Controls</h1>
      <p>Adjust simulation speed, volatility, and pause/resume the feed.</p>
    </MainLayout>
  );
}
