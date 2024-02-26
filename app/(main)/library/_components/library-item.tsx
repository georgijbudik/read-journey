import Image from "next/image";

import LibraryDelete from "./library-delete";

import { IUserbook } from "@/types";

import { shortenText } from "@/helpers";

interface ILibraryItemProps {
  userbook: IUserbook;
}

const LibraryItem = ({ userbook }: ILibraryItemProps) => {
  const { title, author, imageUrl, id } = userbook;

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

        <LibraryDelete id={id} />
      </div>
    </div>
  );
};

export default LibraryItem;
