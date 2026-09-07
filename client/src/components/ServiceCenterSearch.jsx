"use client";

import { useState } from "react";

export default function ServiceCenterSearch() {
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    setSearched(true);
  };

  return (
    <div className="service-search-section">

      <div className="service-search-card">

        <div className="service-search-icon">
          ⌖
        </div>

        <div className="service-search-content">

          <span className="hero-label">
            LOCATE SUPPORT
          </span>

          <h2>
            Find an authorized service center
          </h2>

          <p>
            Enter your city or location to find available
            service support near you.
          </p>

          <form
            className="service-search-form"
            onSubmit={handleSearch}
          >

            <input
              type="text"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              placeholder="Enter city or pincode"
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Find Center →
            </button>

          </form>

        </div>

      </div>

      {searched && (
        <div className="service-result">

          <div className="service-result-header">

            <div>
              <span className="hero-label">
                AVAILABLE SUPPORT
              </span>

              <h2>
                Service centers near {city}
              </h2>
            </div>

            <span className="service-count">
              3 Centers
            </span>

          </div>

          <div className="service-center-list">

            <div className="service-center-card">

              <div className="center-number">
                01
              </div>

              <div>
                <h3>
                  boAt Authorized Service Center
                </h3>

                <p>
                  Main Market, {city}
                </p>

                <span>
                  Mon–Sat · 10:00 AM – 7:00 PM
                </span>
              </div>

              <button type="button">
                Directions →
              </button>

            </div>

            <div className="service-center-card">

              <div className="center-number">
                02
              </div>

              <div>
                <h3>
                  boAt Care Center
                </h3>

                <p>
                  City Center, {city}
                </p>

                <span>
                  Mon–Sat · 10:00 AM – 7:00 PM
                </span>
              </div>

              <button type="button">
                Directions →
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}