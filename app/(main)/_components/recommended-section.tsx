import { getBooks } from "@/app/api/data";

import Pagination from "./pagination";
import RecommendedList from "./recommended-list";

interface IRecommendedSectionProps {
  title: string;
  author: string;
  page: number;
}

const RecommendedSection = async ({
  page,
  title,
  author,
}: IRecommendedSectionProps) => {
  const booksPerPage = 2;
  const books = await getBooks({ limit: booksPerPage, page, title, author });

  return (
    <div>
      <div className="flex justify-between items-start mb-[14px]">
        <h3 className="text-stone-50 text-xl md:text-3xl font-bold leading-tight">
          Recommended
        </h3>
        <Pagination page={page} />
      </div>
      <RecommendedList books={books} />
    </div>
  );
};

export default RecommendedSection;
