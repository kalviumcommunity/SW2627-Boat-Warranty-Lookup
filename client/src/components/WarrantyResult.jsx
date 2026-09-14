"use client";

import Link from "next/link";
import WarrantyCountdown from "./WarrantyCountdown";
import Pagination from "./Pagination";

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

      <WarrantyCountdown
        purchaseDate={product.purchaseDate}
        expiryDate={product.warrantyExpiry}
      />

      {Array.isArray(product.repairs) && product.repairs.length > 0 && (
        <div className="repairs-section" style={{ marginTop: "2rem" }}>
          <h3 style={{ marginBottom: "1rem" }}>Repair History</h3>
          <div className="repairs-list" style={{ display: "grid", gap: "1rem" }}>
            {product.repairs.map((repair) => (
              <div key={repair.id} className="result-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong>{repair.issue}</strong>
                  {repair.description && <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>{repair.description}</p>}
                  <small style={{ display: "block", marginTop: "0.25rem" }}>Date: {formatDate(repair.repairDate)}</small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="status-badge status-active">{repair.status}</span>
                  <small style={{ display: "block", marginTop: "0.25rem" }}>Cost: ₹{repair.cost}</small>
                </div>
              </div>
            ))}
          </div>

          {product.pagination && product.pagination.totalPages > 1 && (
            <div style={{ marginTop: "1.5rem" }}>
              <Pagination
                currentPage={product.pagination.page}
                totalPages={product.pagination.totalPages}
              />
            </div>
          )}
        </div>
      )}

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