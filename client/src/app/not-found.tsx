import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page center">

      <h1>
        Page Not Found
      </h1>

      <p className="muted">
        The page you are looking for
        does not exist.
      </p>

      <Link
        href="/"
        className="button"
      >
        Go Home
      </Link>

    </div>
  );
}