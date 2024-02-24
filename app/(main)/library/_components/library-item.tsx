import Image from "next/image";

import { IBook } from "@/types";

import { shortenText } from "@/helpers";

import { Trash2 } from "lucide-react";

interface ILibraryItemProps {
  book: IBook;
}

const LibraryItem = ({ book }: ILibraryItemProps) => {
  const { title, author, imageUrl } = book;

  return (
    <div className="w-[137px]">
      <div className="h-[208px] w-[137px] mb-2">
        <Image
          src={imageUrl}
          alt={title}
          height={208}
          width={137}
          className="rounded-[8px] h-[208px] w-[137px] object-fit"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-[2px]">
          <h4 className="w-24 text-stone-50 text-sm font-bold leading-none">
            {shortenText(title, 10)}
          </h4>
          <p className="text-stone-500 text-xs font-medium leading-3">
            {author}
          </p>
        </div>

        <button className="group w-7 h-7 bg-red-500 bg-opacity-10 rounded-full border border-red-500 border-opacity-20 flex items-center justify-center hover:bg-opacity-80 hover:border-opacity-100 transition-all duration-300">
          <Trash2 className="h-[14px] w-[14px] stroke-red-500 group-hover:stroke-primary transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default LibraryItem;
