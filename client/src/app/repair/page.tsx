import Link from "next/link";

type Props = {
  searchParams: Promise<{
    serial?: string;
    product?: string;
  }>;
};

export default async function RepairPage({
  searchParams,
}: Props) {
  const params =
    await searchParams;

  return (
    <section className="page">

      <p className="eyebrow">
        REPAIR
      </p>

      <h1>
        Repair Service
      </h1>

      <p className="muted">
        Your product can be repaired
        through our service.
      </p>

      <div className="repair-card">

        <p>
          Estimated Repair Cost
        </p>

        <h2>
          ₹699
        </h2>

        <div>
          <span>
            Product
          </span>

          <strong>
            {params.product ||
              "Your Product"}
          </strong>
        </div>

        <div>
          <span>
            Estimated Time
          </span>

          <strong>
            5–7 Working Days
          </strong>
        </div>

        <Link
          href={`/service?serial=${params.serial || ""}`}
          className="button"
        >
          Book Repair →
        </Link>

      </div>

    </section>
  );
}