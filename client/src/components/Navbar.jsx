"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);

  const categories = [
    {
      name: "Wireless Earbuds",
      value: "earbuds",
      icon: "◉",
    },
    {
      name: "Wireless Headphones",
      value: "headphones",
      icon: "◯",
    },
    {
      name: "Neckbands",
      value: "neckband",
      icon: "♧",
    },
    {
      name: "Smart Watches",
      value: "smartwatch",
      icon: "◉",
    },
    {
      name: "Speakers",
      value: "speaker",
      icon: "◖",
    },
    {
      name: "Gaming Accessories",
      value: "gaming",
      icon: "🎮",
    },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link href="/" className="navbar-logo">
          boAt
        </Link>

        {/* CENTER NAVIGATION */}
        <nav className="navbar-center">

          {/* PRODUCTS */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="nav-link products-link"
            >
              Products <span>⌄</span>
            </Link>

            {productsOpen && (
              <div
                className="products-mega-menu"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >

                {/* CATEGORY COLUMN */}
                <div className="mega-column categories-column">
                  <p className="mega-heading">
                    PRODUCT CATEGORIES
                  </p>

                  {categories.map((category) => (
                    <Link
                      key={category.value}
                      href={`/products?category=${category.value}`}
                      className="mega-category"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="category-icon">
                        {category.icon}
                      </span>

                      {category.name}
                    </Link>
                  ))}
                </div>

                {/* POPULAR PRODUCTS */}
                <div className="mega-column popular-column">
                  <p className="mega-heading">
                    POPULAR PRODUCTS
                  </p>

                  <Link
                    href="/products?category=earbuds"
                    className="popular-product"
                    onClick={() => setProductsOpen(false)}
                  >
                    <img
                      src="/products/earbuds.jpg"
                      alt="Wireless Earbuds"
                    />

                    <div>
                      <strong>boAt Airdopes 141</strong>
                      <span>Wireless Earbuds</span>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=neckband"
                    className="popular-product"
                    onClick={() => setProductsOpen(false)}
                  >
                    <img
                      src="/products/neckband.jpg"
                      alt="Neckband"
                    />

                    <div>
                      <strong>boAt Rockerz</strong>
                      <span>Neckband</span>
                    </div>
                  </Link>

                  <Link
                    href="/products?category=headphones"
                    className="popular-product"
                    onClick={() => setProductsOpen(false)}
                  >
                    <img
                      src="/products/headphones.jpg"
                      alt="Wireless Headphones"
                    />

                    <div>
                      <strong>boAt Nirvana</strong>
                      <span>Wireless Headphones</span>
                    </div>
                  </Link>

                  <Link
                    href="/products"
                    className="view-all-products"
                    onClick={() => setProductsOpen(false)}
                  >
                    View all products →
                  </Link>
                </div>

                {/* FEATURED PRODUCT */}
                <div className="mega-featured-product">

                  <div className="featured-image">
                    <img
                      src="/products/earbuds.jpg"
                      alt="boAt Airdopes"
                    />
                  </div>

                  <h3>boAt Airdopes 141</h3>

                  <p>
                    True wireless earbuds with
                    powerful sound.
                  </p>

                  <Link
                    href="/products?category=earbuds"
                    className="orange-button"
                    onClick={() => setProductsOpen(false)}
                  >
                    View Details →
                  </Link>

                </div>

              </div>
            )}
          </div>

          {/* YOUR DEVICE */}
          <Link
            href="/warranty"
            className="nav-link"
          >
            Your Device
          </Link>

          {/* HELP */}
          <Link
            href="/help"
            className="nav-link"
          >
            Help Topics
          </Link>

        </nav>

        {/* RIGHT SIDE */}
        <Link
          href="/contact"
          className="connect-button"
        >
          Connect with us
        </Link>

      </div>
    </header>
  );
}

export default Navbar;