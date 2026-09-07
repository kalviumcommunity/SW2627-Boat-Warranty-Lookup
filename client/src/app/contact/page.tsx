import Link from "next/link";

const supportOptions = [
  {
    title: "Email Support",
    value: "support@boat-lifestyle.com",
    description: "Send us your questions.",
    icon: "✉",
  },
  {
    title: "Phone Support",
    value: "1800-419-0416",
    description: "Talk to our support team.",
    icon: "☎",
  },
  {
    title: "Live Chat",
    value: "Chat with support",
    description: "Get instant assistance.",
    icon: "▣",
  },
  {
    title: "Service Centers",
    value: "Find a center",
    description: "Locate nearby support.",
    icon: "⌖",
  },
];

export default function ContactPage() {
  return (
    <section className="contact-page">

      <div className="contact-header">

        <p className="eyebrow">
          GET IN TOUCH
        </p>

        <h1>
          We're here to help.
        </h1>

        <p>
          Have questions about your device?
          Reach out to us anytime.
        </p>

      </div>

      <div className="contact-grid">

        {supportOptions.map((item) => (
          <div
            className="contact-card"
            key={item.title}
          >

            <div className="contact-icon">
              {item.icon}
            </div>

            <h2>
              {item.title}
            </h2>

            <strong>
              {item.value}
            </strong>

            <p>
              {item.description}
            </p>

          </div>
        ))}

      </div>

      <div className="contact-office">

        <div>

          <p className="eyebrow">
            SERVICE & SUPPORT
          </p>

          <h2>
            Need help with your device?
          </h2>

          <p>
            Check your warranty, submit a claim,
            or find a nearby service center.
          </p>

          <div className="contact-actions">

            <Link
              href="/warranty"
              className="orange-button"
            >
              Check Warranty →
            </Link>

            <Link
              href="/service"
              className="outline-button"
            >
              Find Service Center
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}