import Link from "next/link";
import { notFound } from "next/navigation";
import WarrantyResult from "@/components/WarrantyResult";
import { getWarranty } from "@/lib/warranty";

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

  if (!/^[A-Z0-9]{11}$/.test(cleanSerial)) {
    notFound();
  }

  const result = await getWarranty(cleanSerial);

  if (result.status === "NOT_FOUND") {
    notFound();
  }

  if (result.status === "ERROR") {
    return (
      <main className="page">
        <section className="result-page">
          <Link
            href="/warranty"
            className="back-link"
          >
            ← Check another serial number
          </Link>

          <div className="error-state">
            <h1>Something went wrong</h1>

            <p>
              Unable to connect to the warranty
              service.
            </p>

            <Link
              href={`/warranty-result/${encodeURIComponent(
                cleanSerial
              )}`}
            >
              Try Again
            </Link>
          </div>
        </section>
      </main>
    );
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

        <WarrantyResult
          result={result.data}
        />
      </section>
    </main>
  );
}