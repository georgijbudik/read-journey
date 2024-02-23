import Image from "next/image";

import { IBook } from "@/types";

import { shortenText } from "@/helpers";

interface IRecommededItemProps {
  book: IBook;
}

const RecommendedItem = ({ book }: IRecommededItemProps) => {
  const { _id, title, author, imageUrl, totalPages, recommend } = book;

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="rounded-lg w-[137px] h-[208px]">
        <Image
          src={imageUrl}
          alt={title}
          width={137}
          height={208}
          className="w-[137px] h-[208px] rounded-[8px] object-fit"
        />
      </div>

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
