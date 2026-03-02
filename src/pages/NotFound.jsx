import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="card" style={{ padding: "1rem" }}>
      <h1 style={{ marginTop: 0 }}>404 - Page Not Found</h1>
      <p className="muted">That route doesn’t exist.</p>
      <Link className="button" to="/">
        Go Home
      </Link>
    </section>
  );
}