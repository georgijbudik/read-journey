import LibraryItem from "./library-item";

import { IBook } from "@/types";

const books: IBook[] = [
  {
    id: "6550a3456a354932256964ed",
    title:
      "Gates of Europe. History of Ukraine from the Scythian Wars to Independence",
    author: "Serhiy Plohyi",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_Gates_of_Europe._History_of_Ukraine_from_the_Scythian_Wars_to_Independence.jpg",
    totalPages: 496,
    recommend: true,
  },
  {
    id: "6550a36e6a354932256964f1",
    title: "GALYA WITHOUT A HEAD",
    author: "Luco Dashvar",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_GALYA_WITHOUT_A_HEAD.webp",
    totalPages: 400,
    recommend: true,
  },
  {
    id: "6550a34a354932256964ed",
    title:
      "Gates of Europe. History of Ukraine from the Scythian Wars to Independence",
    author: "Serhiy Plohyi",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_Gates_of_Europe._History_of_Ukraine_from_the_Scythian_Wars_to_Independence.jpg",
    totalPages: 496,
    recommend: true,
  },
  {
    id: "6550a36e6a35496964f1",
    title: "GALYA WITHOUT A HEAD",
    author: "Luco Dashvar",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_GALYA_WITHOUT_A_HEAD.webp",
    totalPages: 400,
    recommend: true,
  },
  {
    id: "6550a3456a3546964ed",
    title:
      "Gates of Europe. History of Ukraine from the Scythian Wars to Independence",
    author: "Serhiy Plohyi",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_Gates_of_Europe._History_of_Ukraine_from_the_Scythian_Wars_to_Independence.jpg",
    totalPages: 496,
    recommend: true,
  },
  {
    id: "6550a36e6a354932256964",
    title: "GALYA WITHOUT A HEAD",
    author: "Luco Dashvar",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_GALYA_WITHOUT_A_HEAD.webp",
    totalPages: 400,
    recommend: true,
  },
];

const LibraryList = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
      {books.map((book) => (
        <li key={book.id}>
          <LibraryItem book={book} />
        </li>
      ))}
    </ul>
  );
};

export default LibraryList;
