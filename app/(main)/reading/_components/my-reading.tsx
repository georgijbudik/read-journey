import Book from "./book";

import { IUserbook } from "@/types";

interface IMyReadingProps {
  book: IUserbook;
}

const MyReading = ({ book }: IMyReadingProps) => {
  const { imageUrl, title, author } = book;

  return (
    <section className="lg:w-full lg:h-full">
      <div className="bg-foreground py-10 px-5 mt-2.5 lg:mt-0 rounded-[30px] md:px-10 md:pb-[25px] lg:pb-[53px]">
        <h3 className="text-primary text-xl font-bold mb-10 md:text-[28px] md:mb-8 lg:mb-[44px]">
          My library
        </h3>
        <Book book={book} />

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-primary text-sm font-bold mb-[5px] md:text-xl">
            {title}
          </h4>
          <p className="text-[10px] text-[#686868] mb-5 md:text-sm md:mb-4 lg:pb-[25px]">
            {author}
          </p>
          <button type="button">
            <div className="bg-transparent border-2 border-primary w-10 h-10 md:w-[50px] md:h-[50px] rounded-[50%] flex justify-center items-center">
              <div className="bg-accent-red w-[30px] h-[30px] md:w-10 md:h-10 rounded-[50%]"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyReading;
