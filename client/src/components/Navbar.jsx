"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link href="/" className="brand-logo">
          boAt
        </Link>

        <nav className="nav-links">

          <div
            className="nav-dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="nav-link"
            >
              Products
              <span className="nav-arrow">⌄</span>
            </Link>

            {productsOpen && (
              <div className="products-mega-menu">

                {/* Categories */}

                <div className="mega-column">
                  <span className="mega-label">
                    PRODUCT CATEGORIES
                  </span>

                  <Link href="/products?category=earbuds">
                    <span className="mega-icon">◉</span>
                    <span>Wireless Earbuds</span>
                  </Link>

                  <Link href="/products?category=headphones">
                    <span className="mega-icon">◯</span>
                    <span>Wireless Headphones</span>
                  </Link>

                  <Link href="/products?category=neckbands">
                    <span className="mega-icon">◌</span>
                    <span>Neckbands</span>
                  </Link>

                  <Link href="/products?category=smartwatches">
                    <span className="mega-icon">◉</span>
                    <span>Smart Watches</span>
                  </Link>

                  <Link href="/products?category=speakers">
                    <span className="mega-icon">◉</span>
                    <span>Speakers</span>
                  </Link>

                  <Link href="/products?category=gaming">
                    <span className="mega-icon">◈</span>
                    <span>Gaming</span>
                  </Link>

                  <Link
                    href="/products"
                    className="view-all-products"
                  >
                    View all products →
                  </Link>
                </div>

                {/* Popular products */}

                <div className="mega-column popular-products">
                  <span className="mega-label">
                    POPULAR
                  </span>

                  <Link href="/products/airdopes-141">
                    <img
                      src="/products/earbuds.jpg"
                      alt="boAt Airdopes 141"
                    />

                    <span>
                      <strong>Airdopes 141</strong>
                      <small>Wireless Earbuds</small>
                    </span>
                  </Link>

                  <Link href="/products/rockerz-255">
                    <img
                      src="/products/neckband.jpg"
                      alt="boAt Rockerz 255"
                    />

                    <span>
                      <strong>Rockerz 255</strong>
                      <small>Neckband</small>
                    </span>
                  </Link>

                  <Link href="/products/nirvana-751">
                    <img
                      src="/products/headphones.jpg"
                      alt="boAt Nirvana 751"
                    />

                    <span>
                      <strong>Nirvana 751</strong>
                      <small>Headphones</small>
                    </span>
                  </Link>
                </div>

                {/* Featured */}

                <div className="mega-feature">

                  <div className="mega-feature-image">
                    <img
                      src="/products/earbuds.jpg"
                      alt="boAt Airdopes 141"
                    />
                  </div>

                  <span className="mega-feature-tag">
                    FEATURED
                  </span>

                  <h3>
                    boAt Airdopes 141
                  </h3>

                  <p>
                    Powerful wireless earbuds designed
                    for everyday listening.
                  </p>

                  <Link
                    href="/products/airdopes-141"
                    className="mega-feature-button"
                  >
                    View Details →
                  </Link>

                </div>

              </div>
            )}
          </div>

          <Link
            href="/warranty"
            className="nav-link"
          >
            Your Device
          </Link>

          <Link
            href="/help"
            className="nav-link"
          >
            Help Topics
          </Link>

        </nav>

        <div className="navbar-actions">

          <Link
            href="/login"
            className="nav-icon"
            aria-label="Account"
          >
            ◯
          </Link>

          <Link
            href="/contact"
            className="connect-btn"
          >
            Connect with us
          </Link>

        </div>

      </div>
    </header>
  );
}