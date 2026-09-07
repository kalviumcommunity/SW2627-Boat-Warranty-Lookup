import Link from "next/link";

export default function WarrantyActions({
  serial,
  productName,
}) {
  return (
    <section className="actions-section">

      <h2>
        What would you like to do?
      </h2>

      <div className="action-grid">

        <Link
          href={`/extend-warranty?serial=${serial}`}
          className="option-card"
        >
          <h3>
            Warranty Extend
          </h3>

          <p>
            Extend your product warranty.
          </p>

          <span>
            View Plans →
          </span>
        </Link>

        <Link
          href={`/service?serial=${serial}&product=${encodeURIComponent(productName)}`}
          className="option-card"
        >
          <h3>
            Book Service
          </h3>

          <p>
            Book a service appointment.
          </p>

          <span>
            Book Now →
          </span>
        </Link>

        <Link
          href={`/repair?serial=${serial}&product=${encodeURIComponent(productName)}`}
          className="option-card"
        >
          <h3>
            Repair Cost
          </h3>

          <p>
            Check estimated repair cost.
          </p>

          <span>
            Check Now →
          </span>
        </Link>

      </div>

    </section>
  );
}