import Link from "next/link";

import HintList from "./hint-list";
import HintPagination from "./hint-pagination";
import { getBooks } from "@/app/api/data";

interface IHintSectionProps {
  page: number;
}

const HintSection = async ({ page }: IHintSectionProps) => {
  const booksPerPage = 3;

  const { data: books, meta } = await getBooks({
    limit: booksPerPage,
    page,
  });

  return (
    <div className="p-5 md:px-5 md:py-[26px] lg:p-5 bg-neutral-800 rounded-xl">
      <h4 className="text-primary text-lg font-bold leading-none mb-[14px] md:mb-5">
        Recommended books
      </h4>

      <div className="mb-[17px] md:mb-5">
        <HintList books={books} />
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-secondary text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          Home
        </Link>

        <HintPagination meta={meta} />
      </div>
    </div>
  );
};

export default HintSection;
