"use client";

import {
  usePathname,
  useRouter,
  useSearchParams
} from "next/navigation";

function ProductSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams =
    useSearchParams();

  const currentSearch =
    searchParams.get("q") || "";

  function handleChange(event) {
    const value =
      event.target.value;

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    params.delete("page");

    router.push(
      `${pathname}?${params.toString()}`
    );
  }

  return (
    <input
      value={currentSearch}
      onChange={handleChange}
      placeholder="Search products..."
    />
  );
}

export default ProductSearch;