import Image from "next/image";

import HTMLFlipBook from "react-pageflip";

import { forwardRef, useState } from "react";

interface IPageProps {
  number: number;
  children: React.ReactNode;
}

interface IPageCoverProps {
  bookCoverUrl?: string;
  children?: React.ReactNode;
}

interface IBookProps {
  bookCoverUrl: string;
}

const PageCover = forwardRef<HTMLDivElement, IPageCoverProps>((props, ref) => {
  return (
    <div className="rounded-[8px] bg-red-500" ref={ref} data-density="hard">
      <div className="page-content">
        {props.bookCoverUrl && (
          <div>
            <Image
              src={(props.bookCoverUrl as string) || ""}
              alt="Book cover"
              width={224}
              height={340}
              className="w-[137px] h-[208px] rounded-[8px] mb-[10px] md:w-[169px] md:h-[256px] md:mb-[25px] lg:w-[224px] lg:h-[340px] "
            />
          </div>
        )}
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

PageCover.displayName = "PageCover";

const Page = forwardRef<HTMLDivElement, IPageProps>((props, ref) => {
  return (
    <div className="rounded-[8px] bg-red-300" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

Page.displayName = "Page";

const Book = ({ bookCoverUrl }: IBookProps) => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const onPage = (e: any) => {
    setPage(e.data);
  };

  return (
    <div className="flex justify-center">
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
        onFlip={onPage}
        showPageCorners={true}
      >
        <PageCover bookCoverUrl={bookCoverUrl} />
        <Page number={1}>Lorem ipsum...</Page>
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
