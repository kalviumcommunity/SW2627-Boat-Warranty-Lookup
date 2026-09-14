"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const router = useRouter();
  const auth = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const identifier = formData.identifier.trim();
    const password = formData.password;

    if (!identifier) {
      setError("Please enter your mobile number or email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      if (auth?.login) {
        await auth.login(Email, password);
      } else {
        throw new Error("Authentication service is unavailable.");
      }

      router.push("/account");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="professional-login-form"
      onSubmit={handleSubmit}
    >

      {/* LOGIN METHOD */}
      <div className="login-method-tabs">
        <button
          type="button"
          className="login-method active"
        >
          <span>✉</span>
          Mobile Number or Email
        </button>

        <button
          type="button"
          className="login-method"
          onClick={() => {
            setError("OTP login will be available soon.");
          }}
        >
          <span>▣</span>
          Use OTP
        </button>
      </div>

      {/* IDENTIFIER */}
      <div className="login-field">
        <label htmlFor="identifier">
          Mobile Number or Email
        </label>

        <div className="login-input-wrapper">
          <span className="login-input-icon">
            ◯
          </span>

          <input
            id="identifier"
            name="identifier"
            type="text"
            value={formData.identifier}
            onChange={handleChange}
            placeholder="9876543210 or you@example.com"
            autoComplete="username"
          />
        </div>
      </div>

      {/* PASSWORD */}
      <div className="login-field">
        <label htmlFor="password">
          Password
        </label>

        <div className="login-input-wrapper">
          <span className="login-input-icon">
            ♙
          </span>

          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            autoComplete="current-password"
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? "◉" : "◌"}
          </button>
        </div>
      </div>

      {/* OPTIONS */}
      <div className="login-options">

        <label className="remember-option">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) =>
              setRememberMe(e.target.checked)
            }
          />

          <span className="custom-checkbox">
            {rememberMe ? "✓" : ""}
          </span>

          <span>Remember me</span>
        </label>

        <Link
          href="/login"
          className="forgot-password"
          onClick={(e) => {
            e.preventDefault();
            setError("Password recovery will be available soon.");
          }}
        >
          Forgot Password?
        </Link>

      </div>

      {/* ERROR */}
      {error && (
        <div className="login-error">
          {error}
        </div>
      )}

      {/* SIGN IN */}
      <button
        type="submit"
        className="login-submit"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}

        {!loading && (
          <span>→</span>
        )}
      </button>

      {/* DIVIDER */}
      <div className="login-divider">
        <span></span>
        <strong>OR</strong>
        <span></span>
      </div>

      {/* GOOGLE */}
      <button
        type="button"
        className="google-login"
        onClick={() =>
          setError("Google sign in will be available soon.")
        }
      >
        <span className="google-icon">G</span>
        Sign in with Google
      </button>

      {/* SIGN UP */}
      <p className="login-signup">
        Don't have an account?

        <Link href="/signup">
          Create Account
        </Link>
      </p>

    </form>
  );
}