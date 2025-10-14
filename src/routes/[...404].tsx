import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import { useNavigate } from "@solidjs/router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main class="notfound_main">
      <Title>Page Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Sorry, we couldn't find the page you're looking for.
        <br />
        <button
          class="btn btn-primary btn-notfound"
          onClick={() => navigate("/")}
        >
          Return to Dashboard
        </button>
      </p>
    </main>
  );
}
