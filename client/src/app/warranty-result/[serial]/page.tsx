import Link from "next/link";
import { notFound } from "next/navigation";
import WarrantyResult from "@/components/WarrantyResult";

type Props = {
  params: Promise<{
    serial: string;
  }>;
};

export default async function WarrantyResultPage({
  params,
}: Props) {
  const { serial } = await params;

  const cleanSerial = serial
    .trim()
    .toUpperCase();

  // Frontend requires exactly 11 alphanumeric characters.
  if (!/^[A-Z0-9]{11}$/.test(cleanSerial)) {
    notFound();
  }

  const backendUrl =
    process.env.BACKEND_URL ||
    "http://127.0.0.1:5000";

  let result = null;
  let errorMessage = "";

  try {
    let response;
    try {
      response = await fetch(
        `${backendUrl}/api/v1/products/${encodeURIComponent(
          cleanSerial
        )}`,
        {
          cache: "no-store",
        }
      );
    } catch (netErr) {
      if (backendUrl.includes("localhost")) {
        const fallbackUrl = backendUrl.replace("localhost", "127.0.0.1");
        response = await fetch(
          `${fallbackUrl}/api/v1/products/${encodeURIComponent(
            cleanSerial
          )}`,
          {
            cache: "no-store",
          }
        );
      } else {
        throw netErr;
      }
    }

    if (response.status === 404) {
      notFound();
    }

    if (!response.ok) {
      const errJson = await response.json().catch(() => null);
      throw new Error(
        errJson?.error?.message ||
          errJson?.message ||
          `Warranty API returned status ${response.status}`
      );
    }

    const responseData = await response.json();
    result = responseData?.data || null;

    if (!result) {
      throw new Error(
        "Warranty data was not returned from backend service"
      );
    }
  } catch (error) {
    if (error && typeof error === "object" && "digest" in error && typeof (error as { digest?: unknown }).digest === "string" && ((error as { digest: string }).digest).startsWith("NEXT_HTTP_ERROR_FALLBACK")) {
      throw error;
    }

    console.error(
      "Warranty result page error:",
      error
    );

    errorMessage =
      error instanceof Error && error.message && !error.message.includes("fetch failed")
        ? error.message
        : "Unable to connect to the warranty service.";
  }

  return (
    <main className="page">
      <section className="result-page">
        <Link
          href="/warranty"
          className="back-link"
        >
          ← Check another serial number
        </Link>

        {errorMessage ? (
          <div className="result-error">
            <h1>Something went wrong</h1>

            <p>{errorMessage}</p>

            <Link
              href="/warranty"
              className="retry-button"
            >
              Try Again
            </Link>
          </div>
        ) : (
          <WarrantyResult
            result={result}
          />
        )}
      </section>
    </main>
  );
}