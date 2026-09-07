import WarrantyForm from "@/components/WarrantyForm";
import Link from "next/link";

export default function WarrantyPage() {
  return (
    <main className="lookup-page">

      {/* HERO / LOOKUP SECTION */}
      <section className="lookup-hero">

        {/* Background Image */}
        <div className="lookup-background"></div>

        {/* Dark Overlay */}
        <div className="lookup-overlay"></div>

        <div className="lookup-content">

          {/* LEFT SIDE */}
          <div className="lookup-intro">

            <span className="hero-label">
              BOAT WARRANTY SUPPORT
            </span>

            <h1>
              Check your
              <br />
              <span>device warranty.</span>
            </h1>

            <p>
              Enter your 11-character product serial number
              to check your warranty status and remaining
              coverage.
            </p>

            <div className="lookup-benefits">

              <div className="lookup-benefit">
                <div className="benefit-icon">
                  ✓
                </div>

                <div>
                  <strong>100% Genuine</strong>
                  <span>
                    Verify authentic boAt products
                  </span>
                </div>
              </div>

              <div className="lookup-benefit">
                <div className="benefit-icon">
                  ◷
                </div>

                <div>
                  <strong>Instant Results</strong>
                  <span>
                    Get warranty status in seconds
                  </span>
                </div>
              </div>

              <div className="lookup-benefit">
                <div className="benefit-icon">
                  ♧
                </div>

                <div>
                  <strong>Dedicated Support</strong>
                  <span>
                    We're here whenever you need us
                  </span>
                </div>
              </div>

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="lookup-card">

            <div className="lookup-card-header">

              <div className="lookup-card-icon">
                ▥
              </div>

              <div>
                <h2>
                  Warranty Lookup
                </h2>

                <p>
                  Enter your product serial number
                </p>
              </div>

            </div>


            {/* Existing Warranty Functionality */}
            <WarrantyForm />


            <div className="lookup-divider">
              <span>OR</span>
            </div>


            <button
              type="button"
              className="scan-button"
              disabled
            >
              <span className="scan-icon">
                ⌗
              </span>

              <span>
                <strong>
                  Scan Product Barcode
                </strong>

                <small>
                  Use your device camera
                </small>
              </span>
            </button>


            <Link
              href="/help"
              className="serial-help"
            >
              <span>?</span>

              Where to find the serial number?

              <b>→</b>
            </Link>

          </div>

        </div>
      </section>


      {/* SUPPORT OPTIONS */}
      <section className="lookup-support">

        <div className="lookup-support-heading">

          <div>

            <span className="hero-label">
              NEED MORE HELP?
            </span>

            <h2>
              Explore Support Options
            </h2>

            <p>
              Everything you need for your boAt device,
              in one place.
            </p>

          </div>

          <Link href="/contact">
            View All Support →
          </Link>

        </div>


        <div className="lookup-support-grid">

          <Link
            href="/warranty-claim"
            className="lookup-support-card"
          >
            <div className="support-card-icon">
              ✓
            </div>

            <div>
              <h3>
                Warranty Claim
              </h3>

              <p>
                Submit and track your warranty claims.
              </p>
            </div>

            <span>→</span>
          </Link>


          <Link
            href="/repair"
            className="lookup-support-card"
          >
            <div className="support-card-icon">
              ⌁
            </div>

            <div>
              <h3>
                Repair Support
              </h3>

              <p>
                Book a repair or service for your device.
              </p>
            </div>

            <span>→</span>
          </Link>


          <Link
            href="/contact"
            className="lookup-support-card"
          >
            <div className="support-card-icon">
              ♧
            </div>

            <div>
              <h3>
                Contact Support
              </h3>

              <p>
                Get help via call, email or live chat.
              </p>
            </div>

            <span>→</span>
          </Link>


          <Link
            href="/help"
            className="lookup-support-card"
          >
            <div className="support-card-icon">
              ▤
            </div>

            <div>
              <h3>
                Help Center
              </h3>

              <p>
                Find FAQs, guides and troubleshooting.
              </p>
            </div>

            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}