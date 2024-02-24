import RecommendedDetails from "./recommended-details";

import { IBook } from "@/types";

import { shortenText } from "@/helpers";

interface IRecommededItemProps {
  book: IBook;
}

const RecommendedItem = ({ book }: IRecommededItemProps) => {
  const { title, author } = book;

  return (
    <div className="flex flex-col items-start gap-2">
      <RecommendedDetails book={book} />

      <div>
        <h4 className="text-stone-50 text-sm font-bold leading-none mb-[2px]">
          {shortenText(title, 15)}
        </h4>
        <p className="text-stone-500 text-xs font-medium leading-3">{author}</p>
      </div>
    </div>
  );
};

export default RecommendedItem;
