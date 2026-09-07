"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ClaimSubmittedPage() {
  const searchParams = useSearchParams();

  const claimId =
    searchParams.get("claimId") || "CLM-PENDING";

  return (
    <main className="page">
      <section className="success-page">
        <div className="success-icon">✓</div>

        <span className="hero-label">CLAIM SUBMITTED</span>

        <h1>Warranty Claim Submitted</h1>

        <p>
          Your claim has been successfully submitted.
          Our support team will review it shortly.
        </p>

        <div className="claim-id-card">
          <span>Claim ID</span>
          <strong>{claimId}</strong>
        </div>

        <div className="success-actions">
          <Link href="/account" className="primary-btn">
            Track Status
          </Link>

          <Link href="/" className="secondary-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}