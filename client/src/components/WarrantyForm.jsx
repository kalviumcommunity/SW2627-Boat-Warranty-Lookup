"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WarrantyForm() {
  const router = useRouter();

  const [serial, setSerial] =
    useState("");

  const [error, setError] =
    useState("");

  function handleChange(e) {
    const value = e.target.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 11);

    setSerial(value);
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!/^[A-Z0-9]{11}$/.test(serial)) {
      setError(
        "Serial number must contain exactly 11 letters and numbers."
      );
      return;
    }

    router.push(
      `/warranty-result/${serial}`
    );
  }

  return (
    <form
      className="warranty-form"
      onSubmit={handleSubmit}
    >

      <label>
        Serial Number
      </label>

      <input
        type="text"
        value={serial}
        onChange={handleChange}
        placeholder="BOAT1234ABC"
        maxLength={11}
      />

      <p className="character-count">
        {serial.length}/11
      </p>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="button"
      >
        Check Warranty →
      </button>

    </form>
  );
}