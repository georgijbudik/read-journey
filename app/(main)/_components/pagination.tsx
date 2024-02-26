"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

const Pagination = ({ page }: { page: number }) => {
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const addPageToUrl = (pageNumber: number | null) => {
    if (!pageNumber || pageNumber <= 0) {
      return pathname;
    }

    const isFirstPage = pageNumber - 1 <= 0;
    setHasPrevPage(!isFirstPage);

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className={cn(
          "group w-8 h-8 md:h-10 md:w-10 rounded-full border border-stone-50 border-opacity-20 flex items-center justify-center hover:border-opacity-100 transition-all duration-300",
          !hasPrevPage && "hover:border-opacity-20"
        )}
        onClick={() => addPageToUrl(page - 1)}
        disabled={!hasPrevPage}
      >
        <svg
          className={cn(
            "h-4 w-4 md:w-5 md:h-5 fill-none stroke-primary group-hover:stroke-primary/100 transition-all duration-300",
            !hasPrevPage && "group-hover:stroke-primary/20 stroke-primary/20"
          )}
        >
          <use xlinkHref="/sprite.svg#icon-left"></use>
        </svg>
      </button>
      <button
        className={cn(
          "group w-8 h-8 md:h-10 md:w-10 rounded-full border border-stone-50 border-opacity-20 flex items-center justify-center hover:border-opacity-100 transition-all duration-300",
          !hasNextPage && "hover:border-opacity-20"
        )}
        onClick={() => addPageToUrl(page + 1)}
      >
        <svg
          className={cn(
            "h-4 w-4 md:w-5 md:h-5 fill-none stroke-primary group-hover:stroke-primary/100 transition-all duration-300",
            !hasNextPage && "group-hover:stroke-primary/20 stroke-primary/20 "
          )}
        >
          <use xlinkHref="/sprite.svg#icon-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
