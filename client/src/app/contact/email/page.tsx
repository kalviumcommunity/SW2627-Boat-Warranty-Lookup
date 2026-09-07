import Link from "next/link";

export default function EmailSupportPage() {
  return (
    <main className="page support-detail-page">

      <section className="support-detail-card">

        <span className="hero-label">
          EMAIL SUPPORT
        </span>

        <div className="support-detail-icon">
          ✉
        </div>

        <h1>
          Send us your query
        </h1>

        <p>
          Describe your issue and our support team will
          get back to you.
        </p>

        <a
          href="mailto:support@boat.example"
          className="primary-btn"
        >
          Send Email
        </a>

        <span className="support-phone">
          support@boat.example
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