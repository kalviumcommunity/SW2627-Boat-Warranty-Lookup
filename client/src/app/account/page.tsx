import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="page account-page">

      <section className="container">

        <div className="account-header">

          <div>

            <span className="hero-label">
              MY ACCOUNT
            </span>

            <h1>
              Your Profile
            </h1>

            <p>
              Manage your account, devices and warranty
              information.
            </p>

          </div>

          <Link
            href="/warranty"
            className="primary-btn"
          >
            Check Warranty →
          </Link>

        </div>

        <div className="account-grid">

          <div className="account-card">

            <div className="profile-avatar">
              H
            </div>

            <div>
              <span>PROFILE</span>
              <h2>Your Account</h2>
            </div>

            <div className="profile-details">

              <div>
                <small>Name</small>
                <strong>Harshit</strong>
              </div>

              <div>
                <small>Email</small>
                <strong>Registered Email</strong>
              </div>

              <div>
                <small>Mobile</small>
                <strong>Registered Mobile</strong>
              </div>

            </div>

            <Link
              href="/login"
              className="secondary-btn"
            >
              Switch Account
            </Link>

          </div>

          <div className="account-card">

            <span className="hero-label">
              DEVICE SUPPORT
            </span>

            <h2>
              Your devices
            </h2>

            <p>
              Check warranty status, submit claims and
              request repairs.
            </p>

            <div className="account-actions">

              <Link href="/warranty">
                Warranty Lookup →
              </Link>

              <Link href="/warranty-claim">
                Warranty Claims →
              </Link>

              <Link href="/repair">
                Repair Support →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}