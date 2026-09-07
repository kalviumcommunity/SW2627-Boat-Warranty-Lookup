import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

export default function ProductList({
  products,
  currentPage,
  totalPages,
}) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <h2>No products found</h2>
        <p>Try another search.</p>
      </div>
    );
  }

  return (
    <>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}