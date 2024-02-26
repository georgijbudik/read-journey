import Link from "next/link";

import HintList from "./hint-list";
import HintPagination from "./hint-pagination";

interface IHintSectionProps {
  page: number;
}

const HintSection = ({ page }: IHintSectionProps) => {
  return (
    <div className="p-5 md:px-5 md:py-[26px] lg:p-5 bg-neutral-800 rounded-xl">
      <h4 className="text-neutral-200 text-lg font-bold leading-none mb-[14px] md:mb-5">
        Recommended books
      </h4>

      <div className="mb-[17px] md:mb-5">
        <HintList page={page} />
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-stone-500 text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          Home
        </Link>

        <HintPagination page={page} />
      </div>
    </div>
  );
};

export default HintSection;
