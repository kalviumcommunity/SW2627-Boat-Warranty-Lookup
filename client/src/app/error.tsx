"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="page">
      <section className="error-page">
        <span className="hero-label">
          SOMETHING WENT WRONG
        </span>

        <h1>We couldn't load this page</h1>

        <p>
          Something unexpected happened. Please try
          again.
        </p>

        <button
          type="button"
          className="primary-btn"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </section>
    </main>
  );
}