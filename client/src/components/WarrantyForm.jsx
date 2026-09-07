"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WarrantyForm() {
  const router = useRouter();

  const [serial, setSerial] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 11);

    setSerial(value);

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanSerial = serial.trim().toUpperCase();

    if (!cleanSerial) {
      setError("Please enter your serial number.");
      return;
    }

    if (!/^[A-Z0-9]{11}$/.test(cleanSerial)) {
      setError(
        "Serial number must contain exactly 11 letters and numbers."
      );
      return;
    }

    setError("");
    setLoading(true);

    router.push(
      `/warranty-result/${cleanSerial}`
    );
  };

  return (
    <form
      className="warranty-lookup-form"
      onSubmit={handleSubmit}
    >

      <label htmlFor="serial">
        Serial Number
      </label>

      <div className="serial-input-wrapper">
        <span className="serial-search-icon">
          ⌕
        </span>

        <input
          id="serial"
          type="text"
          value={serial}
          onChange={handleChange}
          placeholder="Enter 11-character serial number"
          maxLength={11}
          autoComplete="off"
        />
      </div>

      {error && (
        <p className="warranty-form-error">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="warranty-check-button"
        disabled={loading}
      >
        {loading ? "Checking..." : "Check Warranty"}
      </button>

      <div className="warranty-or">
        <span></span>
        <strong>OR</strong>
        <span></span>
      </div>

      <button
        type="button"
        className="warranty-scan-button"
        onClick={() => {
          alert("Barcode scanner can be connected here.");
        }}
      >
        <span className="scan-icon">
          ⛶
        </span>

        <span>
          <strong>Scan Product Barcode</strong>
          <small>Use your device camera</small>
        </span>
      </button>

    </form>
  );
}