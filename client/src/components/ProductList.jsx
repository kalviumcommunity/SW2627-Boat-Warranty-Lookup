import Link from "next/link";
import { getProducts } from "@/lib/products";

export default async function ProductList({
  query = "",
  category = "",
  page = 1,
}) {
  const result = await getProducts({
    query,
    category,
    page,
  });

  return (
    <div className="product-list">

      <div className="products-grid">

        {result.products.map((product) => (
          <article
            key={product.id}
            className="product-card"
          >

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

              <h2>
                {product.name}
              </h2>

              <Link
                href={`/products?category=${product.category}`}
              >
                View Details →
              </Link>

            </div>

          </article>
        ))}

      </div>

      {result.products.length === 0 && (
        <div className="empty-products">
          <h2>No products found</h2>

          <p>
            Try another category or search term.
          </p>
        </div>
      )}

    </div>
  );
}