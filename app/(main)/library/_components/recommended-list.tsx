import { IBook } from "@/types";

import RecommendedItem from "./recommended-item";

const recommendations: IBook[] = [
  {
    _id: "6550a3456a354932256964ed",
    title:
      "Gates of Europe. History of Ukraine from the Scythian Wars to Independence",
    author: "Serhiy Plohyi",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_Gates_of_Europe._History_of_Ukraine_from_the_Scythian_Wars_to_Independence.jpg",
    totalPages: 496,
    recommend: true,
  },
  {
    _id: "6550a36e6a354932256964f1",
    title: "GALYA WITHOUT A HEAD",
    author: "Luco Dashvar",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_GALYA_WITHOUT_A_HEAD.webp",
    totalPages: 400,
    recommend: true,
  },
  {
    _id: "6550a3826a354932256964f5",
    title: "I see you are interested in darkness ",
    author: "Illarion Pavliuk",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_I_see_you_are_interested_in_darkness_.webp",
    totalPages: 664,
    recommend: true,
  },
];

const RecommendedList = () => {
  return (
    <ul className="flex items-center justify-center md:justify-start gap-5">
      {recommendations.map((recommendation) => (
        <li key={recommendation._id}>
          <RecommendedItem book={recommendation} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
