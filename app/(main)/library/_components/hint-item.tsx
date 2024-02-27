import RecommendedDetails from "../../_components/recommended-details";

import { IBook } from "@/types";

import { shortenText } from "@/helpers";

interface IHintItemProps {
  book: IBook;
}

const HintItem = ({ book }: IHintItemProps) => {
  const { title, author, imageUrl } = book;

  return (
    <div>
      <RecommendedDetails book={book} isHint />

      <div className="flex flex-col gap-[2px]">
        <h4 className="text-neutral-200 text-xs font-bold leading-3">
          {shortenText(title, 8)}
        </h4>
        <p className="text-stone-500 text-xs font-medium leading-3">
          {shortenText(author, 9)}
        </p>
      </div>
    </div>
  );
};

export default HintItem;
