"use client";

import { useState } from "react";

const centers = {
  delhi: [
    {
      name: "boAt Service Center - Connaught Place",
      city: "New Delhi",
      distance: "3.2 km",
    },
    {
      name: "boAt Service Center - Karol Bagh",
      city: "New Delhi",
      distance: "5.7 km",
    },
    {
      name: "boAt Service Center - Dwarka",
      city: "New Delhi",
      distance: "12.4 km",
    },
  ],

  gurugram: [
    {
      name: "boAt Service Center - Gurugram",
      city: "Gurugram",
      distance: "2.5 km",
    },
  ],

  noida: [
    {
      name: "boAt Service Center - Noida",
      city: "Noida",
      distance: "4.1 km",
    },
  ],
};

export default function ServiceCenterSearch() {
  const [city, setCity] =
    useState("");

  const [results, setResults] =
    useState([]);

  function searchCenters() {
    const key =
      city.trim().toLowerCase();

    setResults(
      centers[key] || []
    );
  }

  return (
    <div className="service-search">

      <div className="search-box">

        <h2>
          Find Service Center
        </h2>

        <p>
          Enter your city to find
          the nearest service centers.
        </p>

        <div className="search-row">

          <input
            type="text"
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            placeholder="Enter your city"
          />

          <button
            onClick={searchCenters}
            className="button"
          >
            Search
          </button>

        </div>

        {results.length === 0 &&
          city && (
            <div className="nearby-cities">

              <p>
                No service center in
                your city?
              </p>

              <p>
                Try these nearby cities:
              </p>

              <button
                onClick={() => {
                  setCity("Delhi");
                  setResults(
                    centers.delhi
                  );
                }}
              >
                Delhi
              </button>

              <button
                onClick={() => {
                  setCity("Gurugram");
                  setResults(
                    centers.gurugram
                  );
                }}
              >
                Gurugram
              </button>

              <button
                onClick={() => {
                  setCity("Noida");
                  setResults(
                    centers.noida
                  );
                }}
              >
                Noida
              </button>

            </div>
          )}

      </div>

      <div className="service-results">

        {results.map((center) => (
          <div
            key={center.name}
            className="service-card"
          >
            <h3>
              {center.name}
            </h3>

            <p>
              {center.city}
            </p>

            <strong>
              {center.distance}
            </strong>
          </div>
        ))}

      </div>

    </div>
  );
}