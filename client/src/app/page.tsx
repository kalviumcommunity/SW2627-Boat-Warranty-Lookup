import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero page">

      <div className="hero-text">

        <p className="eyebrow">
          THE SOUND OF THE FUTURE
        </p>

        <h1>
          Sound.
          <br />

          <span>Style.</span>
          <br />

          Everything.
        </h1>

        <p className="hero-copy">
          Discover powerful audio, smart devices
          and technology designed around your
          everyday life.
        </p>

        <div className="hero-buttons">

          <Link
            href="/products"
            className="button"
          >
            Explore Products
          </Link>

          <Link
            href="/warranty"
            className="outline-button"
          >
            Check Warranty →
          </Link>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/boat-hero.jpg"
          alt="boAt product"
        />

      </div>

    </section>
  );
}