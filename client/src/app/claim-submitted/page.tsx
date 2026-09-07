import Link from "next/link";

type Props = {
  searchParams: Promise<{
    claimId?: string;
  }>;
};

export default async function ClaimSubmittedPage({
  searchParams
}: Props) {
  const params =
    await searchParams;

  return (
    <section className="page center">

      <div className="success-icon">
        ✓
      </div>

      <h1>
        Claim Submitted
      </h1>

      <p className="muted">
        Your warranty claim has been
        successfully submitted.
      </p>

      {params.claimId && (
        <p>
          Claim ID:{" "}
          <strong>
            {params.claimId}
          </strong>
        </p>
      )}

      <Link
        href="/"
        className="button"
      >
        Go Home
      </Link>

    </section>
  );
}