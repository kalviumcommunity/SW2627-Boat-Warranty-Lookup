import ClaimForm from "@/components/ClaimForm";

export default function WarrantyClaimPage() {
  return (
    <main className="page">
      <section className="container">
        <div className="page-heading">
          <span className="hero-label">WARRANTY SUPPORT</span>

          <h1 className="page-title">
            Submit a Warranty Claim
          </h1>

          <p className="page-subtitle">
            Tell us about your device issue and our support
            team will help you resolve it.
          </p>
        </div>

        <ClaimForm />
      </section>
    </main>
  );
}