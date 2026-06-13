"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center justify-center w-9 h-9 rounded text-sm font-medium transition-colors disabled:text-text-light disabled:cursor-not-allowed hover:bg-section text-text-secondary enabled:hover:text-text-primary"
        aria-label="Previous page"
      >
        <HiChevronLeft className="text-lg" />
      </button>

      {/* Page numbers */}
      {getVisiblePages().map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-sm text-text-light">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center w-9 h-9 rounded text-sm font-semibold transition-colors ${
              page === currentPage
                ? "bg-primary text-white"
                : "text-text-secondary hover:bg-section hover:text-text-primary"
            }`}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center justify-center w-9 h-9 rounded text-sm font-medium transition-colors disabled:text-text-light disabled:cursor-not-allowed hover:bg-section text-text-secondary enabled:hover:text-text-primary"
        aria-label="Next page"
      >
        <HiChevronRight className="text-lg" />
      </button>
    </nav>
  );
}
