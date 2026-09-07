"use client";

export default function ErrorPage({
  reset
}: {
  reset: () => void;
}) {
  return (
    <div className="page center">

      <h1>
        Something went wrong
      </h1>

      <p className="muted">
        Please try again.
      </p>

      <button
        className="button"
        onClick={reset}
      >
        Try Again
      </button>

    </div>
  );
}