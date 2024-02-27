"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IMetaPagination } from "@/types";

import { cn } from "@/lib/utils";

interface IPaginationProps {
  meta: IMetaPagination;
}

const Pagination = ({ meta }: IPaginationProps) => {
  const { hasNextPage, hasPrevPage, currentPage: page } = meta;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const addPageToUrl = (pageNumber: number | null) => {
    if (!pageNumber || pageNumber <= 0) {
      return pathname;
    }

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
        disabled={!hasNextPage}
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
