import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-layout">

        {/* LEFT SIDE */}
        <div className="login-visual">
          <div className="login-visual-overlay"></div>

          <div className="login-visual-content">
            <span className="login-eyebrow">
              BOAT ACCOUNT
            </span>

            <h1>
              Welcome
              <br />
              <span>Back.</span>
            </h1>

            <p className="login-description">
              Sign in to manage your devices,
              <br />
              warranties and claims.
            </p>

            <div className="login-benefits">

              <div className="login-benefit">
                <div className="login-benefit-icon">✓</div>

                <div>
                  <strong>Track Your Warranty</strong>
                  <span>Get real-time warranty status</span>
                </div>
              </div>

              <div className="login-benefit">
                <div className="login-benefit-icon">◇</div>

                <div>
                  <strong>Manage Your Devices</strong>
                  <span>Keep all your boAt products in one place</span>
                </div>
              </div>

              <div className="login-benefit">
                <div className="login-benefit-icon">♧</div>

                <div>
                  <strong>Get Latest Updates</strong>
                  <span>Be the first to know about new launches</span>
                </div>
              </div>

              <div className="login-benefit">
                <div className="login-benefit-icon">◉</div>

                <div>
                  <strong>24/7 Support</strong>
                  <span>We're here whenever you need us</span>
                </div>
              </div>

            </div>

            <div className="login-slogan">
              Live
              <br />
              <span>the Sound</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-form-area">
          <div className="login-card">

            <div className="login-card-header">
              <span className="login-card-label">
                BOAT ACCOUNT
              </span>

              <h2>Sign In</h2>

              <p>
                Enter your credentials to access your boAt account.
              </p>
            </div>

            <LoginForm />

          </div>
        </div>

      </section>
    </main>
  );
}