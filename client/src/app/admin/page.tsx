import Link from "next/link";

import { getSession } from "@/lib/auth";

export default async function AdminPage() {
  const session =
    await getSession();

  if (session !== "admin") {
    return (
      <section className="page center">

        <h1>
          Access Denied
        </h1>

        <p className="muted">
          You do not have permission
          to access this page.
        </p>

        <Link
          href="/login"
          className="button"
        >
          Login
        </Link>

      </section>
    );
  }

  return (
    <section className="page">

      <p className="eyebrow">
        ADMIN
      </p>

      <h1>
        Admin Dashboard
      </h1>

      <div className="action-grid">

        <div className="option-card">
          <h2>
            Products
          </h2>

          <p>
            Manage products.
          </p>
        </div>

        <div className="option-card">
          <h2>
            Warranty Claims
          </h2>

          <p>
            View customer claims.
          </p>
        </div>

        <div className="option-card">
          <h2>
            Service Centers
          </h2>

          <p>
            Manage service centers.
          </p>
        </div>

      </div>

    </section>
  );
}