import { Title } from "@solidjs/meta";
import { ParentComponent } from "solid-js";
import "./AboutPage.css";

const AboutPage: ParentComponent = () => {
  return (
    <main class="about-page">
      <Title>About — Real-Time Market Visualization</Title>

      <section class="hero panel">
        <h1>Real-Time Market Visualization</h1>
        <p class="lead">
          Exploring SolidJS through a real-world use case: high-frequency data
          visualization. This demo showcases how fine-grained reactivity enables
          smooth, low-latency UI updates under sustained load.
        </p>
      </section>

      <section class="panel">
        <h2>Research & Motivation</h2>
        <p>
          The project began as an investigation into SolidJS's performance model
          — specifically its fine-grained reactive primitives versus traditional
          virtual DOM frameworks. Instead of purely benchmarking, the goal was
          to identify a real application where the difference matters. The
          chosen scenario: a market dashboard with frequent price updates.
        </p>
        <ul>
          <li>Fine-grained reactivity minimizes unnecessary work</li>
          <li>No virtual DOM diffing; DOM is updated directly via signals</li>
          <li>Predictable performance as update frequency grows</li>
        </ul>
      </section>

      <section class="panel">
        <h2>What this demo shows</h2>
        <ul>
          <li>Simulated market data with realistic price movement</li>
          <li>High-frequency updates and smooth visual feedback</li>
          <li>Simple metrics and per-item flash animations to show updates</li>
        </ul>
      </section>

      <section class="panel">
        <h2>When to use SolidJS</h2>
        <p>
          SolidJS is an excellent choice when your UI needs frequent updates but
          the structure remains stable — trading dashboards, live monitoring,
          IoT UIs, and other real-time tools are natural fits.
        </p>
      </section>

      <footer class="panel muted">
        <p>
          This project was built for a Devine Development Expert assignment to
          research a framework outside the course scope and build a presentable
          demo featuring both research findings and a working prototype.
        </p>
      </footer>
    </main>
  );
};

export default AboutPage;
