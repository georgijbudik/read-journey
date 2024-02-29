"use client";

import { forwardRef, useState } from "react";

import Image from "next/image";

import HTMLFlipBook from "react-pageflip";
import { IUserbook } from "@/types";
import { cn } from "@/lib/utils";

interface IPageProps {
  startPage?: boolean;
  number: number;
  children?: React.ReactNode;
  author?: string;
  title?: string;
  imageUrl?: string;
}

interface IPageCoverProps {
  bookCoverUrl?: string;
  isEnd?: boolean;
  children?: React.ReactNode;
}

interface IBookProps {
  book: IUserbook;
}

const PageCover = forwardRef<HTMLDivElement, IPageCoverProps>(
  ({ bookCoverUrl, isEnd, children }, ref) => {
    return (
      <div className="rounded-[8px] bg-red-500" ref={ref} data-density="hard">
        {bookCoverUrl && (
          <div>
            <Image
              src={(bookCoverUrl as string) || ""}
              alt="Book cover"
              width={224}
              height={340}
              className="w-[137px] h-[208px] rounded-[8px] mb-[10px] md:w-[169px] md:h-[256px] md:mb-[25px] lg:w-[224px] lg:h-[340px] "
            />
          </div>
        )}

        <div className="page-content h-full flex justify-center items-center">
          <h2>{children}</h2>
        </div>
      </div>
    );
  }
);

PageCover.displayName = "PageCover";

const Page = forwardRef<HTMLDivElement, IPageProps>(
  ({ number, children, startPage, title, author, imageUrl }, ref) => {
    const isEvenPage = number % 2 === 0;

    return (
      <div className="rounded-[8px] bg-primary p-2" ref={ref}>
        {startPage ? (
          <div className="page-content flex flex-col items-center justify-center h-full">
            {/* <Image src={imageUrl!} alt={title!} width={40} height={40} /> */}

            <div
              className="w-full h-[150px] bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <div className="page-text flex flex-col items-center justify-center gap-4 flex-grow">
              <h3 className="text-lg text-center">{title}</h3>
              <p className="text-sm text-neutral-800/90">{author}</p>
            </div>

            <div className="page-footer w-full text-neutral-800/30 flex justify-between">
              <p>©️ Read Journey</p>
              <p>2023</p>
            </div>
          </div>
        ) : (
          <div className="page-content">
            <div
              className={cn("flex items-center", isEvenPage && "justify-end")}
            >
              <h2 className="page-header">{number}</h2>
            </div>
            <div className="page-image"></div>
            <div className="page-text">{children}</div>
            <div className="page-footer"></div>
          </div>
        )}
      </div>
    );
  }
);

Page.displayName = "Page";

const Book = ({ book }: IBookProps) => {
  const { imageUrl, author, title } = book;

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const onFlip = (page: number) => {
    setPage(page);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={224}
        height={340}
        className="w-[137px] h-[208px] rounded-[8px] mb-[10px] md:w-[169px] md:h-[256px] md:mb-[25px] lg:w-[224px] lg:h-[340px] "
        size="fixed"
        minWidth={300}
        maxWidth={300}
        minHeight={300}
        maxHeight={300}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        showPageCorners={true}
        onFlip={(e) => onFlip(e.data)}
        startPage={1}
      >
        <PageCover bookCoverUrl={imageUrl} />
        <Page
          number={1}
          startPage
          title={title}
          author={author}
          imageUrl={imageUrl}
        />

        <Page number={2}>Lorem ipsum...</Page>
        <Page number={3}>Lorem ipsum...</Page>
        <Page number={4}>Lorem ipsum...</Page>
        <Page number={5}>Lorem ipsum...</Page>
        <Page number={6}>Lorem ipsum...</Page>
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
