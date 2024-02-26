import { getUserBooks } from "@/app/api/data";
import LibraryItem from "./library-item";

import { getCurrentUser } from "@/lib/session";
import LibraryEmpty from "./library-empty";

const LibraryList = async () => {
  const session = await getCurrentUser();
  const email = session.user.email;

  const userbooks = await getUserBooks(email);

  return (
    <div>
      {userbooks?.length === 0 ? (
        <LibraryEmpty />
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          {userbooks?.map((userbook) => (
            <li key={userbook.id}>
              <LibraryItem userbook={userbook} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LibraryList;
