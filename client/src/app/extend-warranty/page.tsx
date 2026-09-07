import Link from "next/link";

export default async function ExtendWarrantyPage() {
  return (
    <section className="page">

      <p className="eyebrow">
        WARRANTY
      </p>

      <h1>
        Extend Warranty
      </h1>

      <p className="muted">
        Select a plan to extend your warranty.
      </p>

      <div className="plans">

        <div className="plan-card">
          <h2>3 Months</h2>
          <h3>₹399</h3>

          <p>
            3 months additional coverage
          </p>

          <Link
            href="/warranty-claim?type=extension&plan=3"
            className="button"
          >
            Select Plan
          </Link>
        </div>

        <div className="plan-card">
          <h2>6 Months</h2>
          <h3>₹699</h3>

          <p>
            6 months additional coverage
          </p>

          <Link
            href="/warranty-claim?type=extension&plan=6"
            className="button"
          >
            Select Plan
          </Link>
        </div>

        <div className="plan-card">
          <h2>12 Months</h2>
          <h3>₹1,199</h3>

          <p>
            12 months additional coverage
          </p>

          <Link
            href="/warranty-claim?type=extension&plan=12"
            className="button"
          >
            Select Plan
          </Link>
        </div>

      </div>

    </section>
  );
}