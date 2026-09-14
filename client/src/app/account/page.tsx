"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
  const auth = useAuth() as any;
  const user = auth?.user;
  const loading = auth?.loading;
  const logout = auth?.logout;

  if (loading) {
    return (
      <main className="page account-page">
        <section className="container">
          <p>Loading user profile...</p>
        </section>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="page account-page">
        <section className="container">
          <div className="account-header">
            <div>
              <span className="hero-label">MY ACCOUNT</span>
              <h1>Sign In Required</h1>
              <p>Please sign in to view your profile and manage your account.</p>
            </div>
            <Link href="/login" className="primary-btn">
              Sign In →
            </Link>
          </div>
        </section>
      </main>
    );
  }

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
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>

            <div>
              <span>PROFILE</span>
              <h2>Your Account</h2>
            </div>

            <div className="profile-details">

              <div>
                <small>Name</small>
                <strong>{user.name}</strong>
              </div>

              <div>
                <small>Email</small>
                <strong>{user.email}</strong>
              </div>

              <div>
                <small>Role</small>
                <strong style={{ textTransform: "capitalize" }}>{user.role}</strong>
              </div>

            </div>

            <button
              onClick={() => logout && logout()}
              className="secondary-btn"
              style={{ marginTop: "1rem", cursor: "pointer" }}
            >
              Sign Out
            </button>

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