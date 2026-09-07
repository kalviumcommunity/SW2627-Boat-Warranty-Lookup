import ProductList from "@/components/ProductList";
import ProductSearch from "@/components/ProductSearch";
import { products } from "@/lib/products";

type Props = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    page?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const search = params.search?.toLowerCase() || "";
  const category = params.category?.toLowerCase() || "";

  const page = Math.max(
    1,
    Number(params.page || "1")
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !search ||
      product.name.toLowerCase().includes(search);

    const matchesCategory =
      !category ||
      product.category.toLowerCase() === category;

    return matchesSearch && matchesCategory;
  });

  const pageSize = 4;

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / pageSize)
  );

  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * pageSize;

  const paginatedProducts = filteredProducts.slice(
    start,
    start + pageSize
  );

  return (
    <main className="page">
      <section className="container">
        <div className="page-heading">
          <span className="hero-label">
            EXPLORE BOAT
          </span>

          <h1 className="page-title">
            Our Products
          </h1>

          <p className="page-subtitle">
            Find your perfect boAt device.
          </p>
        </div>

        <ProductSearch initialValue={params.search || ""} />

        <ProductList
          products={paginatedProducts}
          currentPage={safePage}
          totalPages={totalPages}
        />
      </section>
    </main>
  );
}