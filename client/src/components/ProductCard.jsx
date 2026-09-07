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
        <span>{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <Link
          href={`/products/${product.slug}`}
          className="secondary-btn"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}