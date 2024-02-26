import { getBooks } from "@/app/api/data";
import Pagination from "./pagination";
import RecommendedList from "./recommended-list";

const RecommendedSection = async ({
  searchParams,
}: {
  searchParams: {
    page?: string;
  };
}) => {
  const page = Number(searchParams?.page) || 1;
  const books = await getBooks({ limit: 2, page });

  return (
    <div className="py-[40px] px-[20px] md:px-[40px] bg-foreground rounded-3xl">
      <div className="flex justify-between items-start mb-[22px] md:mb-[20px]">
        <h3 className="text-stone-50 text-xl md:text-3xl font-bold leading-tight ">
          Recommended
        </h3>
        <Pagination page={page} />
      </div>
      <RecommendedList books={books} />
    </div>
  );
};

export default RecommendedSection;
