import Link from "next/link";

import RecommendedList from "./recommended-list";
import RecommendedPagination from "./recommended-pagination";

const RecommendedSection = () => {
  return (
    <div className="p-5 md:px-5 md:py-[26px] lg:p-5 bg-neutral-800 rounded-xl">
      <h4 className="text-neutral-200 text-lg font-bold leading-none mb-[14px] md:mb-5">
        Recommended books
      </h4>

      <div className="mb-[17px] md:mb-5">
        <RecommendedList />
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/recommended"
          className="text-stone-500 text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          Home
        </Link>

        <RecommendedPagination />
      </div>
    </div>
  );
};

export default RecommendedSection;
