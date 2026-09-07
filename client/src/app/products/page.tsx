import ProductSearch from "@/components/ProductSearch";
import ProductList from "@/components/ProductList";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const query = params.q || "";
  const category = params.category || "";
  const page = Number(params.page || "1");

  return (
    <section className="products-page">

      <div className="products-header">

        <p className="eyebrow">
          PRODUCTS
        </p>

        <h1>
          Find your perfect device.
        </h1>

        <p>
          Explore audio, wearables and gaming
          products designed for everyday life.
        </p>

      </div>

      <div className="products-layout">

        {/* CATEGORY SIDEBAR */}

        <aside className="products-sidebar">

          <h3>
            Categories
          </h3>

          <Link
            href="/products"
            className={!category ? "active-category" : ""}
          >
            All Products
          </Link>

          <Link
            href="/products?category=earbuds"
            className={category === "earbuds" ? "active-category" : ""}
          >
            Wireless Earbuds
          </Link>

          <Link
            href="/products?category=headphones"
            className={category === "headphones" ? "active-category" : ""}
          >
            Wireless Headphones
          </Link>

          <Link
            href="/products?category=neckband"
            className={category === "neckband" ? "active-category" : ""}
          >
            Neckbands
          </Link>

          <Link
            href="/products?category=smartwatch"
            className={category === "smartwatch" ? "active-category" : ""}
          >
            Smart Watches
          </Link>

          <Link
            href="/products?category=speaker"
            className={category === "speaker" ? "active-category" : ""}
          >
            Speakers
          </Link>

          <Link
            href="/products?category=gaming"
            className={category === "gaming" ? "active-category" : ""}
          >
            Gaming Accessories
          </Link>

        </aside>

        {/* PRODUCTS */}

        <div className="products-content">

          <ProductSearch />

          <Suspense
            fallback={
              <div className="products-loading">
                Loading products...
              </div>
            }
          >
            <ProductList
              query={query}
              category={category}
              page={page}
            />
          </Suspense>

        </div>

      </div>

    </section>
  );
}