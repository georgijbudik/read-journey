"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IHintPaginationProps {
  page: number;
}

const HintPagination = ({ page }: IHintPaginationProps) => {
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
    <button
      className="group"
      type="button"
      onClick={() => addPageToUrl(page + 1)}
    >
      <svg className="stroke-primary h-5 w-5 md:h-6 md:w-6 group-hover:stroke-stone-500 transition-all duration-300">
        <use xlinkHref="/sprite.svg#icon-arrow"></use>
      </svg>
    </button>
  );
};

export default HintPagination;
