"use client";

import { useState } from "react";

export default function ServiceBookingForm({
  serial = "",
  product = ""
}) {
  const [form, setForm] = useState({
    serial,
    product,
    name: "",
    phone: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    // Demo booking delay
    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    setLoading(false);

    setMessage(
      "Service appointment request submitted successfully."
    );
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
      <h2>Book Service</h2>

      <input
        type="text"
        name="serial"
        value={form.serial}
        onChange={handleChange}
        placeholder="Serial Number"
        maxLength={11}
        required
      />

      <input
        type="text"
        name="product"
        value={form.product}
        onChange={handleChange}
        placeholder="Product Name"
      />

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="button"
        disabled={loading}
      >
        {loading
          ? "Booking..."
          : "Book Appointment"}
      </button>

      {message && (
        <p className="success-message">
          {message}
        </p>
      )}
    </form>
  );
}