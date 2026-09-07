"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.mobile && !formData.email) {
      setError(
        "Enter either your mobile number or registered email."
      );
      return;
    }

    if (
      formData.mobile &&
      !/^[0-9]{10}$/.test(formData.mobile)
    ) {
      setError(
        "Mobile number must contain exactly 10 digits."
      );
      return;
    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      /*
       * Keep your existing signup API here if you already
       * have one connected to Piyush's backend.
       *
       * Example:
       *
       * const response = await fetch("/api/auth/signup", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(formData),
       * });
       */

      router.push("/account");
    } catch (err) {
      setError("Unable to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="signup-form"
      onSubmit={handleSubmit}
    >

      {/* FULL NAME */}
      <div className="signup-field">

        <label htmlFor="name">
          Full Name
        </label>

        <div className="signup-input-wrapper">
          <span>♙</span>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

      </div>

      {/* MOBILE */}
      <div className="signup-field">

        <label htmlFor="mobile">
          Mobile Number
        </label>

        <div className="signup-input-wrapper">
          <span>☎</span>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
          />
        </div>

      </div>

      {/* EMAIL */}
      <div className="signup-field">

        <label htmlFor="email">
          Registered Email
        </label>

        <div className="signup-input-wrapper">
          <span>✉</span>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <small className="signup-field-hint">
          Enter either your mobile number or registered email.
        </small>

      </div>

      {/* PASSWORD */}
      <div className="signup-field">

        <label htmlFor="password">
          Password
        </label>

        <div className="signup-input-wrapper">
          <span>♙</span>

          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />
        </div>

        <small className="password-hint">
          ✓ At least 8 characters
          &nbsp; | &nbsp;
          ✓ 1 number
          &nbsp; | &nbsp;
          ✓ 1 special character
        </small>

      </div>

      {/* CONFIRM PASSWORD */}
      <div className="signup-field">

        <label htmlFor="confirmPassword">
          Confirm Password
        </label>

        <div className="signup-input-wrapper">
          <span>♙</span>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </div>

      </div>

      {error && (
        <p className="signup-error">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="signup-submit"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account →"}
      </button>

    </form>
  );
}