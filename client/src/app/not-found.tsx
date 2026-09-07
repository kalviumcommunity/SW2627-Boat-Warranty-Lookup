import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <section className="error-page">
        <span className="hero-label">
          404
        </span>

        <h1>Page Not Found</h1>

        <p>
          Sorry, we couldn't find the page you're looking
          for.
        </p>

        <Link
          href="/"
          className="primary-btn"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}