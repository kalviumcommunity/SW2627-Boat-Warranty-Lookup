"use client";

import Link from "next/link";

function Pagination({
  currentPage,
  totalPages
}) {
  return (
    <div className="pagination">

      {currentPage > 1 && (
        <Link
          href={`/products?page=${currentPage - 1}`}
        >
          ← Previous
        </Link>
      )}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={`/products?page=${currentPage + 1}`}
        >
          Next →
        </Link>
      )}

    </div>
  );
}

export default Pagination;