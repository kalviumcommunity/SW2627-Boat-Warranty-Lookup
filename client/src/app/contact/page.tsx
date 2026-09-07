import Link from "next/link";

const supportOptions = [
  {
    icon: "☎",
    title: "Call Support",
    description:
      "Speak directly with our customer support team.",
    action: "Call Us",
    href: "/contact/call",
  },
  {
    icon: "✉",
    title: "Email Support",
    description:
      "Send us your query and we'll get back to you.",
    action: "Send Email",
    href: "/contact/email",
  },
  {
    icon: "◉",
    title: "Live Chat",
    description:
      "Get quick assistance from our support experts.",
    action: "Start Chat",
    href: "/contact/chat",
  },
  {
    icon: "⌖",
    title: "Service Centers",
    description:
      "Find an authorized service center near you.",
    action: "Find Center",
    href: "/service",
  },
];

export default function ContactPage() {
  return (
    <main className="page contact-page">
      <section className="container">

        {/* Hero */}

        <div className="contact-hero">
          <div>
            <span className="hero-label">
              BOAT SUPPORT
            </span>

            <h1>
              We're here to
              <br />
              <span>help you.</span>
            </h1>

            <p>
              Whether you need help with your warranty,
              product, repair or claim, our support team
              is ready to assist you.
            </p>
          </div>

          <div className="contact-hero-badge">
            <span>24/7</span>
            <small>Support experience</small>
          </div>
        </div>

        {/* Contact options */}

        <div className="contact-section-header">
          <div>
            <span className="hero-label">
              GET IN TOUCH
            </span>

            <h2>
              Choose how you'd like to connect
            </h2>
          </div>

          <p>
            Select an option below and we'll help you get
            your issue resolved.
          </p>
        </div>

        <div className="contact-grid premium-contact-grid">

          {supportOptions.map((option) => (
            <div
              className="premium-contact-card"
              key={option.title}
            >

              <div className="contact-icon">
                {option.icon}
              </div>

              <h3>
                {option.title}
              </h3>

              <p>
                {option.description}
              </p>

              <Link
                href={option.href}
                className="contact-action"
              >
                {option.action}
                <span>→</span>
              </Link>

            </div>
          ))}

        </div>

        {/* Warranty support */}

        <div className="contact-bottom">

          <div>
            <span className="hero-label">
              WARRANTY SUPPORT
            </span>

            <h2>
              Need help with your device warranty?
            </h2>

            <p>
              Check your warranty status or submit a claim
              in just a few steps.
            </p>
          </div>

          <Link
            href="/warranty"
            className="primary-btn"
          >
            Check Warranty →
          </Link>

        </div>

      </section>
    </main>
  );
}