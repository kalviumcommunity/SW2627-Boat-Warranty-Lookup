"use client";

import { useState } from "react";

export default function ServiceBookingForm() {
  const [form, setForm] = useState({
    serialNumber: "",
    issueType: "",
    serviceType: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setResult(null);
    setError("");
  };

  const handleSerialChange = (e) => {
    const value = e.target.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 11);

    setForm((prev) => ({
      ...prev,
      serialNumber: value,
    }));

    setResult(null);
    setError("");
  };

  const analyzeRepair = () => {
    let estimatedCost = 699;
    let estimatedTime = "5–7 Days";
    let severity = "Standard Repair";

    if (form.issueType === "Battery") {
      estimatedCost = 899;
      estimatedTime = "4–6 Days";
      severity = "Battery Replacement";
    }

    if (form.issueType === "Sound") {
      estimatedCost = 799;
      estimatedTime = "3–5 Days";
      severity = "Audio Component Repair";
    }

    if (form.issueType === "Charging") {
      estimatedCost = 749;
      estimatedTime = "3–5 Days";
      severity = "Charging System Repair";
    }

    if (form.issueType === "Connectivity") {
      estimatedCost = 599;
      estimatedTime = "2–4 Days";
      severity = "Connectivity Diagnosis";
    }

    if (form.issueType === "Physical Damage") {
      estimatedCost = 1299;
      estimatedTime = "7–10 Days";
      severity = "Physical Component Repair";
    }

    if (form.serviceType === "Inspection") {
      estimatedCost = 299;
      estimatedTime = "2–3 Days";
      severity = "Device Inspection";
    }

    return {
      estimatedCost,
      estimatedTime,
      severity,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!/^[A-Z0-9]{11}$/.test(form.serialNumber)) {
      setError(
        "Serial number must contain exactly 11 characters."
      );
      return;
    }

    if (!form.issueType || !form.serviceType) {
      setError("Please select all required options.");
      return;
    }

    const analysis = analyzeRepair();

    setResult(analysis);
  };

  if (result) {
    return (
      <div className="repair-result-card">

        <div className="repair-result-header">
          <span className="hero-label">
            REPAIR ANALYSIS COMPLETE
          </span>

          <h2>
            Here's what we found
          </h2>

          <p>
            Based on the issue and service type you selected,
            here's an estimated service assessment.
          </p>
        </div>

        <div className="repair-result-grid">

          <div>
            <span>Estimated Cost</span>
            <strong>₹{result.estimatedCost}</strong>
          </div>

          <div>
            <span>Estimated Time</span>
            <strong>{result.estimatedTime}</strong>
          </div>

          <div>
            <span>Service Assessment</span>
            <strong>{result.severity}</strong>
          </div>

        </div>

        <div className="repair-result-actions">
          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              alert(
                "Repair booking request submitted successfully."
              );
            }}
          >
            Confirm Repair
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={() => setResult(null)}
          >
            Change Details
          </button>
        </div>

        <p className="repair-disclaimer">
          Final cost and service time may vary after physical
          inspection of the device.
        </p>

      </div>
    );
  }

  return (
    <form
      className="form-card repair-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Serial Number *</label>

        <input
          type="text"
          value={form.serialNumber}
          onChange={handleSerialChange}
          placeholder="BOAT1234ABC"
          maxLength={11}
          required
        />

        <small>
          Enter the 11-character serial number printed on
          your device.
        </small>
      </div>

      <div className="form-group">
        <label>Issue Type *</label>

        <select
          name="issueType"
          value={form.issueType}
          onChange={handleChange}
          required
        >
          <option value="">
            Select issue
          </option>

          <option value="Battery">
            Battery Issue
          </option>

          <option value="Sound">
            Sound Issue
          </option>

          <option value="Charging">
            Charging Issue
          </option>

          <option value="Connectivity">
            Connectivity Issue
          </option>

          <option value="Physical Damage">
            Physical Damage
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>

      <div className="form-group">
        <label>Service Type *</label>

        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">
            Select service
          </option>

          <option value="Repair">
            Repair
          </option>

          <option value="Inspection">
            Inspection
          </option>
        </select>
      </div>

      {error && (
        <p className="error-text">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="primary-btn"
      >
        Analyze Repair
        <span>→</span>
      </button>
    </form>
  );
}