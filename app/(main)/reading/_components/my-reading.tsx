"use client";

import Image from "next/image";

import { getBookById } from "@/app/api/book-actions";
import { useEffect, useState } from "react";
import { Userbook } from "@prisma/client";
import { useSession } from "next-auth/react";

const MyReading = ({ bookId }: { bookId: string }) => {
  const [book, setBook] = useState<Userbook | null>(null);
  const { data } = useSession();
  const email = data?.user?.email as string;
  const fetchBookById = async () => {
    const book = await getBookById({ email, bookId });
    setBook(book);
  };
  useEffect(() => {
    fetchBookById();
  }, []);
  return (
    <section className="lg:w-full lg:h-full">
      <div className="bg-foreground py-10 px-5 mt-2.5 lg:mt-0 rounded-[30px] md:px-10 md:pb-[25px] lg:pb-[53px]">
        <h3 className="text-primary text-xl font-bold mb-10 md:text-[28px] md:mb-8 lg:mb-[44px]">
          My library
        </h3>
        <div className="flex flex-col items-center">
          <Image
            src={(book?.imageUrl as string) || ""}
            alt={(book?.title as string) || ""}
            width={224}
            height={340}
            className="w-[137px] h-[208px] rounded-[8px] mb-[10px] md:w-[169px] md:h-[256px] md:mb-[25px] lg:w-[224px] lg:h-[340px] "
          />
          <h4 className="text-primary text-sm font-bold mb-[5px] md:text-xl">
            {book?.title}
          </h4>
          <p className="text-[10px] text-[#686868] mb-5 md:text-sm md:mb-4 lg:pb-[25px]">
            {book?.author}
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
