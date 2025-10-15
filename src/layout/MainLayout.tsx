import "./MainLayout.css";
import { ParentComponent } from "solid-js";
import Sidebar from "../components/Sidebar";

const MainLayout: ParentComponent = (props) => {
  return (
    <div class="app-layout">
      <Sidebar />
      <div class="app-main">
        <div class="app-content">{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
