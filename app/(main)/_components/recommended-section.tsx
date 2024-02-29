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
  const booksPerPage = 10;

  const { data: books, meta } = await getBooks({
    limit: booksPerPage,
    page,
    title,
    author,
  });

  return (
    <div className="flex-grow py-[40px] px-[20px] md:px-[40px] bg-foreground rounded-[30px]">
      <div className="flex justify-between items-start mb-[14px]">
        <h3 className="text-primary text-xl md:text-3xl font-bold leading-tight">
          Recommended
        </h3>
        <Pagination meta={meta} />
      </div>

      <RecommendedList books={books} />
    </div>
  );
};

export default RecommendedSection;
