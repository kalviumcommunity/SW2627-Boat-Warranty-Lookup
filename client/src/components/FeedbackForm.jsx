"use client";

import { useState } from "react";
import { apiRequest } from "@/api/api";
import { useAuth } from "@/context/AuthContext";

function FeedbackForm() {
  const { token } = useAuth();

  const [rating, setRating] =
    useState(0);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit =
    async (event) => {
      event.preventDefault();

      setSuccess("");
      setError("");

      if (rating < 1 || rating > 5) {
        setError(
          "Please select a rating."
        );
        return;
      }

      if (message.trim().length < 5) {
        setError(
          "Feedback must be at least 5 characters."
        );
        return;
      }

      setLoading(true);

      try {
        await apiRequest(
          "/feedback",
          {
            method: "POST",
            body: JSON.stringify({
              rating,
              message:
                message.trim(),
            }),
          },
          token
        );

        setRating(0);
        setMessage("");

        setSuccess(
          "Thank you for your feedback!"
        );
      } catch (err) {
        setError(
          err.message ||
            "Unable to submit feedback."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="feedback-card">
      <div className="feedback-header">
        <span className="hero-label">
          FEEDBACK
        </span>

        <h2>
          Tell us about your experience
        </h2>

        <p>
          Your feedback helps us improve
          the Boat Warranty Lookup
          experience.
        </p>
      </div>

      <form
        className="feedback-form"
        onSubmit={handleSubmit}
      >
        <label>
          How was your experience?
        </label>

        <div
          className="feedback-rating"
          role="radiogroup"
          aria-label="Rating"
        >
          {[1, 2, 3, 4, 5].map(
            (value) => (
              <button
                key={value}
                type="button"
                className={
                  value <= rating
                    ? "rating-star selected"
                    : "rating-star"
                }
                onClick={() =>
                  setRating(value)
                }
                aria-label={`${value} out of 5`}
              >
                ★
              </button>
            )
          )}
        </div>

        <label htmlFor="feedback-message">
          Your feedback
        </label>

        <textarea
          id="feedback-message"
          value={message}
          onChange={(event) =>
            setMessage(
              event.target.value
            )
          }
          placeholder="Tell us what you liked or what we can improve..."
          maxLength={1000}
          rows={5}
        />

        <div className="feedback-footer">
          <span>
            {message.length}/1000
          </span>

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Feedback"}
          </button>
        </div>

        {error && (
          <p
            className="error-message"
            role="alert"
          >
            {error}
          </p>
        )}

        {success && (
          <p className="success-message">
            {success}
          </p>
        )}
      </form>
    </section>
  );
}

export default FeedbackForm;