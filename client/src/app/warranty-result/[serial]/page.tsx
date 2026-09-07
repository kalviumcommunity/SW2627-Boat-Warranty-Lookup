import Link from "next/link";

export default function WarrantyNotFound() {
  return (
    <section className="page not-found">

      <div className="not-found-card">

        <div className="error-icon">
          ×
        </div>

        <h1>
          Product Not Found
        </h1>

        <p>
          The serial number you entered
          does not exist.
        </p>

        <p>
          Please check and try again.
        </p>

        <Link
          href="/warranty"
          className="button"
        >
          Try Again
        </Link>

      </div>

    </section>
  );
}