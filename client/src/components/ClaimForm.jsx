"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FileUpload from "./FileUpload";

export default function ClaimForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    serialNumber: "",
    fullName: "",
    email: "",
    phone: "",
    issueType: "",
    description: "",
  });

  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!/^[A-Z0-9]{11}$/.test(form.serialNumber)) {
      setError("Serial number must contain exactly 11 letters or numbers.");
      return;
    }

    if (!form.fullName || !form.email || !form.phone) {
      setError("Please fill all required fields.");
      return;
    }

    if (!form.issueType || !form.description) {
      setError("Please provide issue details.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/claims", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit claim");
      }

      const data = await response.json();

      const claimId =
        data.claimId ||
        data.data?.claimId ||
        `CLM-${Date.now()}`;

      router.push(`/claim-submitted?claimId=${claimId}`);
    } catch (err) {
      setError("Unable to submit your claim. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Serial Number *</label>

        <input
          type="text"
          name="serialNumber"
          value={form.serialNumber}
          onChange={handleSerialChange}
          placeholder="BOAT1234ABC"
          maxLength={11}
          required
        />

        <small>Enter exactly 11 characters.</small>
      </div>

      <div className="form-group">
        <label>Full Name *</label>

        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label>Email *</label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label>Phone *</label>

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
      </div>

      <div className="form-group">
        <label>Issue Type *</label>

        <select
          name="issueType"
          value={form.issueType}
          onChange={handleChange}
          required
        >
          <option value="">Select issue</option>
          <option value="Not Working">Device Not Working</option>
          <option value="Battery">Battery Issue</option>
          <option value="Charging">Charging Issue</option>
          <option value="Sound">Sound Issue</option>
          <option value="Connectivity">Connectivity Issue</option>
          <option value="Physical Damage">Physical Damage</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Describe the Issue *</label>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe the problem with your device..."
          rows={5}
          required
        />
      </div>

      <FileUpload onFileSelect={setInvoice} />

      {invoice && (
        <p className="file-selected">
          Selected: {invoice.name}
        </p>
      )}

      {error && <p className="error-text">{error}</p>}

      <button
        type="submit"
        className="primary-btn"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Claim"}
      </button>
    </form>
  );
}