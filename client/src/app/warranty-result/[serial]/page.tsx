import Link from "next/link";
import { notFound } from "next/navigation";
import WarrantyResult from "@/components/WarrantyResult";

type Props = {
  params: Promise<{
    serial: string;
  }>;
};

export default async function WarrantyResultPage({ params }: Props) {
  const { serial } = await params;

  if (!/^[A-Z0-9]{11}$/i.test(serial)) {
    notFound();
  }

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  let result = null;
  let errorMessage = "";

  try {
    const response = await fetch(
      `${apiUrl}/api/products/${serial.toUpperCase()}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }

      throw new Error("Warranty lookup failed");
    }

    result = await response.json();
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_NOT_FOUND") {
      throw error;
    }

    errorMessage = "Unable to connect to the warranty service.";
  }

  return (
    <main className="page">
      <section className="result-page">
        <Link href="/warranty" className="back-link">
          ← Check another serial number
        </Link>

        {errorMessage ? (
          <div className="error-card">
            <h1>Something went wrong</h1>

            <p>{errorMessage}</p>

            <Link href="/warranty" className="primary-btn">
              Try Again
            </Link>
          </div>
        ) : (
          <WarrantyResult result={result} />
        )}
      </section>
    </main>
  );
}