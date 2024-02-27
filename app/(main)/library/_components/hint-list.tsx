import HintItem from "./hint-item";

import { getBooks } from "@/app/api/data";

import { IBook } from "@/types";

interface IHintListProps {
  books: IBook[];
}

const HintList = async ({ books }: IHintListProps) => {
  return (
    <ul className="flex items-center justify-center md:justify-center gap-5">
      {books.map((book) => (
        <li key={book.id}>
          <HintItem book={book} />
        </li>
      ))}
    </ul>
  );
};

export default HintList;
