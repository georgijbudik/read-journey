import LibraryDelete from "./library-delete";

import { IUserbook } from "@/types";

import { shortenText } from "@/helpers";

import RecommendedDetails from "../../_components/recommended-details";

interface ILibraryItemProps {
  userbook: IUserbook;
}

const LibraryItem = ({ userbook }: ILibraryItemProps) => {
  const { title, author, id, status } = userbook;

  const isInProgress = status == "in progress";
  const isDone = status === "done";

  return (
    <div className="w-[137px]">
      <RecommendedDetails
        book={userbook}
        isInLibrary
        isInProgress={isInProgress}
        isDone={isDone}
      />

      <div className="flex justify-between">
        <div className="flex flex-col gap-[2px]">
          <h4 className="w-24 text-stone-50 text-sm font-bold leading-none">
            {shortenText(title, 10)}
          </h4>
          <p className="text-stone-500 text-xs font-medium leading-3">
            {shortenText(author, 10)}
          </p>
        </div>

        <LibraryDelete id={id} />
      </div>
    </div>
  );
};

export default LibraryItem;
