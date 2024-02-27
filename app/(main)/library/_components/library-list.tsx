import { getUserBooks } from "@/app/api/data";
import LibraryItem from "./library-item";

import { getCurrentUser } from "@/lib/session";
import LibraryEmpty from "./library-empty";
import { IUserbook } from "@/types";

interface ILibraryListProps {
  status: string;
}

const LibraryList = async ({ status }: ILibraryListProps) => {
  const session = await getCurrentUser();
  const email = session.user.email;

  const userbooks: IUserbook[] = await getUserBooks(email, status);

  return (
    <div>
      {userbooks?.length === 0 ? (
        <LibraryEmpty />
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-x-[21px] gap-y-[21px] md:gap-x-[28px] md:gap-y-[28px] lg:gap-x-[20px] lg:gap-y-[27px]">
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
