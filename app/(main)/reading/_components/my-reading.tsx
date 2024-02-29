import Image from "next/image";

import BookListening from "./book-listening";
import BookReading from "./book-reading";

import { IUserbook } from "@/types";

interface IMyReadingProps {
  book: IUserbook;
}

const MyReading = ({ book }: IMyReadingProps) => {
  const { title, author, text, imageUrl } = book;

  return (
    <section className="lg:w-full lg:h-full">
      <div className="bg-foreground py-10 px-5 mt-2.5 lg:mt-0 rounded-[30px] md:px-10 md:pb-[25px] lg:pb-[53px]">
        <h3 className="text-primary text-xl font-bold mb-10 md:text-[28px] md:mb-8 lg:mb-[44px]">
          My library
        </h3>

        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt="Book cover"
            width={224}
            height={340}
            className="w-[137px] h-[208px] rounded-[8px] mb-[10px] md:w-[169px] md:h-[256px] md:mb-[25px] lg:w-[224px] lg:h-[340px] md:hidden "
          />
        </div>

        <div className="hidden md:block">
          <BookReading book={book} />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-primary text-sm font-bold mb-[5px] md:text-xl">
            {title}
          </h4>
          <p className="text-[10px] text-secondary mb-5 md:text-sm md:mb-4 lg:pb-[25px]">
            {author}
          </p>

          <BookListening text={text || ""} />
        </div>
      </div>
    </section>
  );
};

export default MyReading;
