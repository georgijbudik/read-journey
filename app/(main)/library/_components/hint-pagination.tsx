"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IMetaPagination } from "@/types";

import { cn } from "@/lib/utils";

interface IHintPaginationProps {
  meta: IMetaPagination;
}

const HintPagination = ({ meta }: IHintPaginationProps) => {
  const { hasNextPage, hasPrevPage, currentPage: page } = meta;

  const pathname = usePathname();
  const searchParams = useSearchParams();
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
    <div className="flex gap-1">
      <button
        className="group rotate-180"
        type="button"
        onClick={() => addPageToUrl(page - 1)}
        disabled={!hasPrevPage}
      >
        <svg
          className={cn(
            "stroke-primary h-5 w-5 md:h-6 md:w-6 group-hover:underline transition-all duration-300",
            !hasPrevPage && "group-hover:no-underline stroke-stone-500"
          )}
        >
          <use xlinkHref="/sprite.svg#icon-arrow"></use>
        </svg>
      </button>

      <button
        className="group"
        type="button"
        onClick={() => addPageToUrl(page + 1)}
        disabled={!hasNextPage}
      >
        <svg
          className={cn(
            "stroke-primary h-5 w-5 md:h-6 md:w-6 transition-all duration-300",
            !hasNextPage && "stroke-stone-500"
          )}
        >
          <use xlinkHref="/sprite.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
  );
};

export default HintPagination;
