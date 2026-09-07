import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <main className="signup-page">

      <div className="signup-background"></div>

      <div className="signup-overlay"></div>

      <section className="signup-layout">

        {/* LEFT CONTENT */}
        <div className="signup-showcase">

          <span className="signup-eyebrow">
            MORE THAN SOUND
          </span>

          <h1>
            Join the
            <br />
            <span>boAt family.</span>
          </h1>

          <p>
            Create your account to manage your devices,
            warranties, claims and get exclusive updates.
          </p>

          <div className="signup-benefits">

            <div className="signup-benefit">
              <span>✓</span>
              <div>
                <strong>Easy Warranty Management</strong>
                <small>
                  Keep your warranty information organized.
                </small>
              </div>
            </div>

            <div className="signup-benefit">
              <span>□</span>
              <div>
                <strong>Register Your Devices</strong>
                <small>
                  Keep all your boAt products in one place.
                </small>
              </div>
            </div>

            <div className="signup-benefit">
              <span>♧</span>
              <div>
                <strong>Get Product Updates</strong>
                <small>
                  Stay updated with your products and support.
                </small>
              </div>
            </div>

            <div className="signup-benefit">
              <span>☆</span>
              <div>
                <strong>Be the First to Know</strong>
                <small>
                  Get access to important updates and offers.
                </small>
              </div>
            </div>

          </div>

          <div className="signup-slogan">
            Live
            <br />
            The Sound
          </div>

        </div>

        {/* FORM */}
        <div className="signup-card">

          <div className="signup-card-header">

            <span className="hero-label">
              BOAT ACCOUNT
            </span>

            <h2>
              Create your account
            </h2>

            <p>
              Register your account to manage your devices,
              warranties and claims.
            </p>

          </div>

          <SignupForm />

          <div className="signup-login">

            Already have an account?

            <Link href="/login">
              Sign In
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}