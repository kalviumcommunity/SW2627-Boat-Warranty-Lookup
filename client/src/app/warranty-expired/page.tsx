import Link from "next/link";

export default function WarrantyExpiredPage() {
  return (
    <section className="page narrow">

      <p className="eyebrow">
        WARRANTY EXPIRED
      </p>

      <h1>
        Your Warranty Has Expired
      </h1>

      <p className="muted">
        You can extend your warranty
        or repair your product.
      </p>

      <div className="action-grid">

        <Link
          href="/extend-warranty"
          className="option-card"
        >
          <h2>
            Extend Warranty
          </h2>

          <p>
            Choose a new warranty plan.
          </p>

          <span>
            View Plans →
          </span>
        </Link>

        <Link
          href="/repair"
          className="option-card"
        >
          <h2>
            Repair Out of Warranty
          </h2>

          <p>
            Check repair options.
          </p>

          <span>
            Repair →
          </span>
        </Link>

      </div>

    </section>
  );
}