import Link from "next/link";

const features = [
  {
    title: "Check Warranty",
    description: "Verify your device warranty status instantly.",
    icon: "✓",
    href: "/warranty",
  },
  {
    title: "Warranty Claim",
    description: "Submit and track your warranty claims.",
    icon: "▤",
    href: "/warranty-claim",
  },
  {
    title: "Repair Support",
    description: "Book a repair or service for your device.",
    icon: "⌁",
    href: "/repair",
  },
  {
    title: "My Account",
    description: "Manage your devices and claims.",
    icon: "◯",
    href: "/account",
  },
];

const categories = [
  {
    name: "Earbuds",
    image: "/products/earbuds.jpg",
    category: "earbuds",
  },
  {
    name: "Neckbands",
    image: "/products/neckband.jpg",
    category: "neckbands",
  },
  {
    name: "Headphones",
    image: "/products/headphones.jpg",
    category: "headphones",
  },
  {
    name: "Speakers",
    image: "/products/speaker.jpg",
    category: "speakers",
  },
  {
    name: "Smartwatches",
    image: "/products/smartwatch.jpg",
    category: "smartwatches",
  },
  {
    name: "Gaming",
    image: "/products/gaming.jpg",
    category: "gaming",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="hero-label">
            BOAT WARRANTY LOOKUP
          </span>

          <h1>
            Stay Covered.
            <br />
            Keep Going.
          </h1>

          <p>
            Check your boAt device warranty, submit claims,
            get support and more — all in one place.
          </p>

          <div className="hero-actions">
            <Link
              href="/warranty"
              className="primary-btn"
            >
              Check Warranty
              <span>→</span>
            </Link>

            <Link
              href="/products"
              className="secondary-btn"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="home-hero-image">
          <div className="hero-glow"></div>

          <img
            src="/boat-hero.jpg"
            alt="boAt products"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <div>
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="home-products">
        <div className="section-heading">
          <h2>Explore Our Products</h2>

          <Link href="/products">
            View All Products →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${category.category}`}
              className="category-card"
            >
              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}