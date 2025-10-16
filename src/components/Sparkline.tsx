import { createSignal, createMemo, onMount, onCleanup } from "solid-js";

interface SparklineProps {
  data: number[];
  color?: string;
  height?: number;
}

export default function Sparkline(props: SparklineProps) {
  const [width, setWidth] = createSignal(100);
  let containerRef: HTMLDivElement | undefined;

  const sparkView = createMemo(() => {
    const data = props.data;
    if (!data || data.length === 0) {
      return { w: 100, h: 32, points: "", lastX: 0, lastY: 0 };
    }

    const w = width() || 100;
    const h = props.height || 32;
    const pad = 4;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const denom = max - min || 1;

    const points = data
      .map((v, i) => {
        const x = pad + ((w - pad * 2) * i) / (data.length - 1);
        const y = pad + (h - pad * 2) * (1 - (v - min) / denom);
        return `${x},${y}`;
      })
      .join(" ");

    const last = data[data.length - 1];
    const lastX = pad + ((w - pad * 2) * (data.length - 1)) / (data.length - 1);
    const lastY = pad + (h - pad * 2) * (1 - (last - min) / denom);

    return { w, h, points, lastX, lastY };
  });

  onMount(() => {
    const measure = () => setWidth(containerRef?.clientWidth || 100);
    measure();
    window.addEventListener("resize", measure);
    onCleanup(() => window.removeEventListener("resize", measure));
  });

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: `${props.height || 32}px` }}
    >
      <svg
        viewBox={`0 0 ${sparkView().w} ${sparkView().h}`}
        width="100%"
        height="100%"
        style={{ display: "block" }}
        aria-hidden
      >
        <polyline
          points={sparkView().points}
          fill="none"
          stroke={props.color || "#6b7280"}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        <circle
          cx={sparkView().lastX}
          cy={sparkView().lastY}
          r="2.2"
          fill={props.color || "#6b7280"}
        />
      </svg>
    </div>
  );
}
