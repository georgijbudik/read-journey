import Image from "next/image";

import { IBook } from "@/types";
import { shortenText } from "@/helpers";

interface IRecommendedItemProps {
  book: IBook;
}

const RecommendedItem = ({ book }: IRecommendedItemProps) => {
  const { title, author, imageUrl } = book;

  return (
    <div>
      <div className="w-[71px] h-[107px] mb-2">
        <Image
          src={imageUrl}
          alt={title}
          height={107}
          width={71}
          className="rounded-[8px] w-[71px] h-[107px] object-fit"
        />
      </div>

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

export default RecommendedItem;
