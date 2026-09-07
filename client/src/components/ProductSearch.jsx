"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProductSearch({
  initialValue = "",
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (value.trim()) {
      params.set("search", value.trim());
    }

    router.push(
      `${pathname}?${params.toString()}`
    );
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products..."
      />

      <button
        type="submit"
        className="primary-btn"
      >
        Search
      </button>
    </form>
  );
}