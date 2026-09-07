"use client";

import Link from "next/link";

export default function WarrantyResult({ result }) {
  if (!result) {
    return null;
  }

  const product = result.data || result.product || result;

  const isActive =
    product.warrantyStatus?.toLowerCase() === "active";

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="warranty-result">
      <div className="result-header">
        <div>
          <span className="hero-label">WARRANTY STATUS</span>

          <h2>{product.productName || "boAt Device"}</h2>

          <p>
            Serial Number:{" "}
            <strong>{product.serialNumber || "N/A"}</strong>
          </p>
        </div>

        <span
          className={`status-badge ${
            isActive ? "status-active" : "status-expired"
          }`}
        >
          {product.warrantyStatus || "Unknown"}
        </span>
      </div>

      <div className="result-grid">
        <div className="result-item">
          <span>Product Model</span>
          <strong>{product.model || "N/A"}</strong>
        </div>

        <div className="result-item">
          <span>Purchase Date</span>
          <strong>{formatDate(product.purchaseDate)}</strong>
        </div>

        <div className="result-item">
          <span>Warranty Valid Till</span>
          <strong>{formatDate(product.warrantyExpiry)}</strong>
        </div>

        <div className="result-item">
          <span>Warranty Type</span>
          <strong>Standard Warranty</strong>
        </div>
      </div>

      <div className="warranty-actions">
        {isActive ? (
          <>
            <Link href="/warranty-claim" className="action-card">
              <strong>Warranty Claim</strong>
              <span>Submit a claim →</span>
            </Link>

            <Link href="/extend-warranty" className="action-card">
              <strong>Extend Warranty</strong>
              <span>Extend coverage →</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/extend-warranty" className="action-card">
              <strong>Extend Warranty</strong>
              <span>Continue protection →</span>
            </Link>

            <Link href="/repair" className="action-card">
              <strong>Repair Device</strong>
              <span>Book repair →</span>
            </Link>
          </>
        )}

        <Link href="/contact" className="action-card">
          <strong>Contact Us</strong>
          <span>Get support →</span>
        </Link>
      </div>
    </div>
  );
}