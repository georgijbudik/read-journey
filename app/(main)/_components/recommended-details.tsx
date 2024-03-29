"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { addBook, deleteBook } from "@/app/api/book-actions";
import { startBook } from "@/app/api/reading-actions";

import { IBook, IUserbook } from "@/types";

import { toast } from "sonner";

interface IRecommendedDetailsProps {
  book: IBook | IUserbook;
  isInLibrary?: boolean;
  isInProgress?: boolean;
  isDone?: boolean;
  isHint?: boolean;
}

const RecommendedDetails = ({
  book,
  isInLibrary = false,
  isInProgress = false,
  isDone = false,
  isHint = false,
}: IRecommendedDetailsProps) => {
  const { refresh, push } = useRouter();

  const { data } = useSession();
  const email = data?.user?.email;

  const { imageUrl, title, author, totalPages, id, text } = book;

  const onHandleAdd = async () => {
    try {
      await addBook({ email, title, author, totalPages, imageUrl, text });

      toast.success(`You have added book "${title}"`);

      refresh();
    } catch (error) {
      toast.error("Something went wrong. Try again");
    }
  };

  const onHandleDelete = async () => {
    try {
      await deleteBook({ email, id });

      toast.warning(`You have deleted book "${title}"`);

      refresh();
    } catch (error) {
      toast.error("Something went wrong. Try again");
    }
  };

  const onHandleStartReading = async () => {
    try {
      await startBook({ id, email });

      push(`/reading?id=${id}`);

      toast.success(`You are reading book "${title}"`);

      refresh();
    } catch (error) {
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isHint ? (
          <button className="w-[71px] h-[107px] mb-2">
            <Image
              src={imageUrl}
              alt={title}
              height={107}
              width={71}
              className="rounded-[8px] w-[71px] h-[107px] object-fit"
            />
          </button>
        ) : (
          <button className="rounded-lg w-[137px] h-[208px]">
            {" "}
            <Image
              src={imageUrl}
              alt={title}
              width={137}
              height={208}
              className="w-[137px] h-[208px] rounded-[8px] object-fit"
            />
          </button>
        )}
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
            <h4 className="max-w-[200px] md:max-w-[300px] text-center text-primary text-lg font-bold leading-none md:leading-tight mb-[2px]">
              {title}
            </h4>
            <p className="text-center text-secondary text-xs font-medium leading-none mb-1">
              {author}
            </p>

            <p className="text-center text-primary text-xs font-medium leading-3">
              {totalPages} pages
            </p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            {isInLibrary ? (
              <div className="flex flex-col items-center md:flex-row gap-2">
                <Button
                  className="px-5 md:px-7 py-2.5 md:py-3"
                  type="button"
                  variant="outline"
                  onClick={onHandleDelete}
                >
                  Delete
                </Button>

                <Button
                  className="px-5 md:px-7 py-2.5 md:py-3"
                  type="button"
                  onClick={onHandleStartReading}
                >
                  {isInProgress
                    ? "Continue reading"
                    : isDone
                    ? "Read again"
                    : "Start reading"}
                </Button>
              </div>
            ) : (
              <Button
                className="px-5 md:px-7 py-2.5 md:py-3"
                type="button"
                variant="outline"
                onClick={onHandleAdd}
              >
                Add to library
              </Button>
            )}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecommendedDetails;
