"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IBook } from "@/types";

interface IRecommendedDetailsProps {
  book: IBook;
}

const RecommendedDetails = ({ book }: IRecommendedDetailsProps) => {
  const { imageUrl, title, author, totalPages } = book;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-lg w-[137px] h-[208px]">
          <Image
            src={imageUrl}
            alt={title}
            width={137}
            height={208}
            className="w-[137px] h-[208px] rounded-[8px] object-fit"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[335px] md:max-w-[500px] py-[40px] md:py-[50px] flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={153}
            height={233}
            className="rounded-[8px] mb-4 w-[140px] h-[213px] md:w-[153px] md:h-[233px]"
          />

          <div>
            <h4 className="max-w-[200px] md:max-w-[300px] text-center text-stone-50 text-lg font-bold leading-none md:leading-tight mb-[2px]">
              {title}
            </h4>
            <p className="text-center text-stone-500 text-xs font-medium leading-none mb-1">
              {author}
            </p>

            <p className="text-center text-stone-50 text-xs font-medium leading-3">
              {totalPages} pages
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button
            className="px-5 md:px-7 py-2.5 md:py-3 rounded-3xl bg-transparent border border-stone-50 border-opacity-20 text-stone-50 text-sm md:text-base font-bold leading-none tracking-tight hover:text-neutral-800 transition-all duration-300"
            type="button"
          >
            Add to library
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecommendedDetails;
