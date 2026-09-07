import Link from "next/link";
import ClaimStatusTimeline from "@/components/ClaimStatusTimeline";

type Props = {
  params: Promise<{
    claimId: string;
  }>;
};

export default async function ClaimStatusPage({ params }: Props) {
  const { claimId } = await params;

  return (
    <main className="page">
      <section className="success-page">
        <span className="hero-label">TRACK YOUR CLAIM</span>

        <h1>Claim Status</h1>

        <p>
          Here&apos;s the latest status for your warranty claim. Bookmark
          this page or save the link below to check back anytime.
        </p>

        <div className="claim-id-card">
          <span>Claim ID</span>
          <strong>{decodeURIComponent(claimId)}</strong>
        </div>

        <ClaimStatusTimeline claimId={decodeURIComponent(claimId)} />

        <div className="success-actions">
          <Link href="/" className="secondary-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
