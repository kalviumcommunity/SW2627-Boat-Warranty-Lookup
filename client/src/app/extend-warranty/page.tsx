"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    duration: "3 Months",
    price: 399,
  },
  {
    duration: "6 Months",
    price: 699,
  },
  {
    duration: "12 Months",
    price: 1199,
  },
];

export default function ExtendWarrantyPage() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <main className="page">
      <section className="container">
        <div className="page-heading">
          <span className="hero-label">
            EXTENDED PROTECTION
          </span>

          <h1 className="page-title">
            Extend Your Warranty
          </h1>

          <p className="page-subtitle">
            Choose a protection plan that works best for you.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <button
              key={plan.duration}
              type="button"
              className={`plan-card ${
                selectedPlan === index
                  ? "plan-selected"
                  : ""
              }`}
              onClick={() => setSelectedPlan(index)}
            >
              <span>{plan.duration}</span>

              <strong>₹{plan.price}</strong>

              <small>
                Extended warranty coverage
              </small>
            </button>
          ))}
        </div>

        <div className="payment-section">
          <h2>
            Selected: {plans[selectedPlan].duration}
          </h2>

          <p>
            Total amount: ₹{plans[selectedPlan].price}
          </p>

          <Link
            href="/contact"
            className="primary-btn"
          >
            Proceed to Payment
          </Link>
        </div>
      </section>
    </main>
  );
}