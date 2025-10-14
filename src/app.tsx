import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { StockProvider } from "./context/StockContext";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Real-Time Dashboard - SolidJS</Title>
          <StockProvider>
            <Suspense>{props.children}</Suspense>
          </StockProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
