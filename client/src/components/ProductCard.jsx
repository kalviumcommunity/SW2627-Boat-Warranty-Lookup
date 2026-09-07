import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image-box">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-card-content">

        <p className="product-type">
          {product.type}
        </p>

        <h3>
          {product.name}
        </h3>

        <Link
          href={`/products?category=${product.category}`}
        >
          View Details →
        </Link>

      </div>

    </article>
  );
}