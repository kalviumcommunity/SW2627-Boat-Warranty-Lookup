"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/api/api";

function AdminFeedback() {
  const [feedback, setFeedback] =
    useState([]);

  const [pagination, setPagination] =
    useState({
      page: 1,
      pageSize: 10,
      total: 0,
      totalPages: 0,
    });

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const loadFeedback =
    async (page) => {
      setLoading(true);
      setError("");

      try {
        const response =
          await apiRequest(
            `/feedback?page=${page}&pageSize=10`
          );

        setFeedback(
          response.data.feedback
        );

        setPagination(
          response.data.pagination
        );
      } catch (err) {
        setError(
          err.message ||
            "Unable to load feedback."
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    loadFeedback(1);
  }, []);

  return (
    <section className="feedback-admin">
      <div className="feedback-header">
        <span className="hero-label">
          USER FEEDBACK
        </span>

        <h2>
          Customer Feedback
        </h2>
      </div>

      {loading && (
        <p>Loading feedback...</p>
      )}

      {error && (
        <p
          className="error-message"
          role="alert"
        >
          {error}
        </p>
      )}

      {!loading &&
        !error &&
        feedback.length === 0 && (
          <p>
            No feedback has been
            submitted yet.
          </p>
        )}

      {!loading &&
        feedback.map((item) => (
          <article
            key={item.id}
            className="feedback-admin-item"
          >
            <div className="feedback-admin-top">
              <strong>
                {item.user.name}
              </strong>

              <span>
                {"★".repeat(item.rating)}
                {"☆".repeat(
                  5 - item.rating
                )}
              </span>
            </div>

            <p>
              {item.message}
            </p>

            <small>
              {item.user.email} ·{" "}
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </small>
          </article>
        ))}

      {pagination.totalPages > 1 && (
        <div className="pagination">
          <button
            type="button"
            disabled={
              loading ||
              pagination.page <= 1
            }
            onClick={() =>
              loadFeedback(
                pagination.page - 1
              )
            }
          >
            Previous
          </button>

          <span>
            Page {pagination.page} of{" "}
            {pagination.totalPages}
          </span>

          <button
            type="button"
            disabled={
              loading ||
              pagination.page >=
                pagination.totalPages
            }
            onClick={() =>
              loadFeedback(
                pagination.page + 1
              )
            }
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default AdminFeedback;