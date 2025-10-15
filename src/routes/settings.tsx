import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import MainLayout from "../layout/MainLayout";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Title>Settings</Title>
      <div class="notfound_main">
        <h1>Settings</h1>
        <p style={{ "max-width": "30rem" }}>
          This demo intentionally keeps Settings minimal. Configuration is not
          implemented because the project is a presentation/demo. Learn more
          about the project on the About page.
        </p>
        <button
          class="btn btn-primary btn-notfound"
          onClick={() => navigate("/about")}
        >
          About
        </button>
      </div>
    </MainLayout>
  );
}
