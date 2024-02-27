import { getBookById } from "@/app/api/book-actions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const MyReading = async () => {
  const searchParams = useSearchParams();
  //   const bookId = searchParams.get("id") as string;
  //   const book = await getBookById({ id: bookId });
  return (
    <section>
      <div className="bg-foreground py-10 mt-2.5 rounded-[30px]">
        <h3 className="text-primary text-xl font-bold">My library</h3>
        <div>
          {/* <Image src={book?.imageUrl as string} alt={book?.title as string} /> */}
        </div>
      </div>
    </section>
  );
};

export default MyReading;
