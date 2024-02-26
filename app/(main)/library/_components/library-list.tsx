import { getUserBooks } from "@/app/api/data";
import LibraryItem from "./library-item";

import { getCurrentUser } from "@/lib/session";
import LibraryEmpty from "./library-empty";

const LibraryList = async () => {
  const session = await getCurrentUser();
  const email = session.user.email;

  const books = await getUserBooks(email);

  return (
    <div>
      {books?.length === 0 ? (
        <LibraryEmpty />
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          {books?.map((book) => (
            <li key={book.id}>
              <LibraryItem book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LibraryList;
