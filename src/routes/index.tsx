import { Title } from "@solidjs/meta";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <main>
      <Title>Real Time Market Visualization</Title>
      <Dashboard />
    </main>
  );
}
