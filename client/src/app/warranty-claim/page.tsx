import ClaimForm from "@/components/ClaimForm";

export default function WarrantyClaimPage() {
  return (
    <section className="page narrow">

      <p className="eyebrow">
        WARRANTY CLAIM
      </p>

      <h1>
        Submit Warranty Claim
      </h1>

      <p className="muted">
        Enter your details and explain
        the issue with your product.
      </p>

      <ClaimForm />

    </section>
  );
}