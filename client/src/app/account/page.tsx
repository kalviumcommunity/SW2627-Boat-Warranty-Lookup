import Link from "next/link";

import { getSession } from "@/lib/auth";

export default async function AccountPage() {
  const session =
    await getSession();

  if (!session) {
    return (
      <section className="page center">

        <h1>
          Please Login
        </h1>

        <Link
          href="/login"
          className="button"
        >
          Login
        </Link>

      </section>
    );
  }

  return (
    <section className="page">

      <p className="eyebrow">
        ACCOUNT
      </p>

      <h1>
        Welcome
      </h1>

      <p className="muted">
        You are logged in.
      </p>

    </section>
  );
}