import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import "./Sidebar.css";
import {
  ChartCandlestick,
  ChevronsLeft,
  ChevronsRight,
  CircleDollarSign,
  Info,
  LayoutDashboard,
  Newspaper,
  Settings,
  Star,
} from "lucide-solid";

export default function Sidebar() {
  const [collapsed, setCollapsed] = createSignal(false);

  const navItems = [
    { href: "/", label: "Dashboard", icon: <LayoutDashboard /> },
    { href: "/stocks", label: "Stocks", icon: <ChartCandlestick /> },
    { href: "/watchlist", label: "Watchlist", icon: <Star /> },
    { href: "/news", label: "News Feed", icon: <Newspaper /> },
  ];

  const secondary = [
    { href: "/settings", label: "Settings", icon: <Settings /> },
    { href: "/about", label: "About", icon: <Info /> },
  ];

  return (
    <aside class={`sidebar ${collapsed() ? "collapsed" : ""}`}>
      <div class="sidebar-header">
        <div class="brand">
          <div class="logo" aria-hidden>
            <CircleDollarSign />
          </div>
          <div class="title">RealTime</div>
        </div>
        <button
          class="collapse-btn"
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed((v) => !v)}
        >
          {collapsed() ? <ChevronsRight /> : <ChevronsLeft />}
        </button>
      </div>

      <nav class="sidebar-nav">
        {navItems.map((item) => (
          <A href={item.href} class="nav-item" activeClass="active">
            <span class="icon" aria-hidden>
              {item.icon}
            </span>
            <span class="label">{item.label}</span>
          </A>
        ))}
      </nav>

      <div class="sidebar-footer">
        {secondary.map((item) => (
          <A href={item.href} class="nav-item small" activeClass="active">
            <span class="icon" aria-hidden>
              {item.icon}
            </span>
            <span class="label">{item.label}</span>
          </A>
        ))}
      </div>
    </aside>
  );
}
