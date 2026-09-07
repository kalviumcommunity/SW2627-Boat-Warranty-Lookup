import Link from "next/link";

export default function WarrantyExpiredPage() {
  return (
    <main className="page">
      <section className="container">
        <div className="expired-card">
          <span className="hero-label">
            WARRANTY EXPIRED
          </span>

          <h1>Your warranty has expired</h1>

          <p>
            Your device is no longer covered under the
            standard warranty. You can extend your coverage
            or book an out-of-warranty repair.
          </p>

          <div className="action-grid">
            <Link
              href="/extend-warranty"
              className="action-card"
            >
              <strong>Extend Warranty</strong>
              <span>Continue protection →</span>
            </Link>

            <Link
              href="/repair"
              className="action-card"
            >
              <strong>Repair Device</strong>
              <span>Book repair →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}