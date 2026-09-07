import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="page product-detail-page">
      <section className="container">

        <Link
          href="/products"
          className="back-link"
        >
          ← Back to Products
        </Link>

        <div className="product-detail">

          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-detail-content">

            <span className="hero-label">
              {product.category}
            </span>

            <h1>
              {product.name}
            </h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="product-detail-info">

              <div>
                <span>Warranty</span>
                <strong>1 Year</strong>
              </div>

              <div>
                <span>Product</span>
                <strong>Genuine boAt</strong>
              </div>

            </div>

            <Link
              href="/warranty"
              className="primary-btn"
            >
              Check Warranty →
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}