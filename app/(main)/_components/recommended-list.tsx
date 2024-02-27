import RecommendedItem from "./recommended-item";

import { IBook } from "@/types";

interface IRecommendedListProps {
  books: IBook[];
}

const RecommendedList = async ({ books }: IRecommendedListProps) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-[21px] md:gap-x-[28px] md:gap-y-[28px] lg:gap-x-[20px] lg:gap-y-[27px]">
      {books.map((book) => (
        <li key={book.id}>
          <RecommendedItem book={book} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
