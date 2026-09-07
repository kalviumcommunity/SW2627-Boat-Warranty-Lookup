import { cookies } from "next/headers";
import Link from "next/link";

export default async function AdminPage() {
  const cookieStore = await cookies();

  const session =
    cookieStore.get("boat_session");

  if (!session) {
    return (
      <main className="page">
        <section className="auth-page">
          <h1>Admin Login Required</h1>

          <p>
            You must be authenticated to access the admin
            dashboard.
          </p>

          <Link
            href="/login"
            className="primary-btn"
          >
            Sign In
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="container">
        <span className="hero-label">
          ADMIN PANEL
        </span>

        <h1 className="page-title">
          Warranty Dashboard
        </h1>

        <div className="admin-grid">
          <div className="admin-card">
            <span>Total Claims</span>
            <strong>24</strong>
          </div>

          <div className="admin-card">
            <span>Pending Claims</span>
            <strong>8</strong>
          </div>

          <div className="admin-card">
            <span>Resolved Claims</span>
            <strong>16</strong>
          </div>
        </div>
      </section>
    </main>
  );
}