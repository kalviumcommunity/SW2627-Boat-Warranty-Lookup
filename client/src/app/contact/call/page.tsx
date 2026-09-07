import Link from "next/link";

export default function CallSupportPage() {
  return (
    <main className="page support-detail-page">

      <section className="support-detail-card">

        <span className="hero-label">
          CALL SUPPORT
        </span>

        <div className="support-detail-icon">
          ☎
        </div>

        <h1>
          Speak with our support team
        </h1>

        <p>
          Our support team can help you with warranty,
          product and repair-related queries.
        </p>

        <a
          href="tel:18001023456"
          className="primary-btn"
        >
          Call Support
        </a>

        <span className="support-phone">
          1800-102-3456
        </span>

        <Link
          href="/contact"
          className="back-link"
        >
          ← Back to Contact
        </Link>

      </section>

    </main>
  );
}