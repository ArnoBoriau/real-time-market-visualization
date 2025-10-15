import { Title } from "@solidjs/meta";
import MainLayout from "../layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <Title>About</Title>
      <h1>About this project</h1>
      <p>Real-Time Market Visualization — research-driven demo for SolidJS.</p>
    </MainLayout>
  );
}
