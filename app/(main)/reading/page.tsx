import { getCurrentUser } from "@/lib/session";
import { getBookById } from "@/app/api/book-actions";

import MyReading from "./_components/my-reading";

const ReadingPage = async ({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) => {
  const bookId = searchParams?.id || "";

  const session = await getCurrentUser();
  const email = session?.user?.email;

  const book = await getBookById({ email, bookId });

  return (
    <div className="lg:flex lg:w-full flex-grow">
      <MyReading book={book} />
    </div>
  );
};

export default ReadingPage;
