import Link from "next/link";

const helpOptions = [
  {
    title: "Warranty",
    description: "Check your product warranty status.",
    href: "/warranty",
    number: "01",
  },
  {
    title: "Warranty Claim",
    description: "Submit a claim for your device.",
    href: "/warranty-claim",
    number: "02",
  },
  {
    title: "Service Center",
    description: "Find an authorized service center.",
    href: "/service",
    number: "03",
  },
  {
    title: "Repair Service",
    description: "Get your out-of-warranty product repaired.",
    href: "/repair",
    number: "04",
  },
  {
    title: "Extend Warranty",
    description: "Explore available warranty extension options.",
    href: "/extend-warranty",
    number: "05",
  },
  {
    title: "Contact Support",
    description: "Talk to our support team.",
    href: "/contact",
    number: "06",
  },
];

export default function HelpPage() {
  return (
    <section className="help-page">

      <div className="help-header">

        <p className="eyebrow">
          HELP TOPICS
        </p>

        <h1>
          How can we help?
        </h1>

        <p>
          Find quick answers and support for
          your boAt device.
        </p>

      </div>

      <div className="help-grid">

        {helpOptions.map((item) => (
          <Link
            href={item.href}
            key={item.number}
            className="help-card"
          >

            <span className="help-number">
              {item.number}
            </span>

            <div>
              <h2>
                {item.title}
              </h2>

              <p>
                {item.description}
              </p>
            </div>

            <span className="help-arrow">
              →
            </span>

          </Link>
        ))}

      </div>

    </section>
  );
}