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
  {
    _id: "6550a3926a354932256964f9",
    title: "Book New Dark Ages. Book 1: The Colony",
    author: "Max Kidruk",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_Book_New_Dark_Ages._Book_1:_The_Colony.webp",
    totalPages: 904,
    recommend: true,
  },
  {
    _id: "6550a3ad6a354932256964fd",
    title: "Don't look back and keep quiet",
    author: "Max Kidruk",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_Don%27t_look_back_and_keep_quiet.webp",
    totalPages: 512,
    recommend: true,
  },
  {
    _id: "6550a3bc6a35493225696501",
    title: "There is land beyond Perekop",
    author: "Anastasiia Levkova",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_There_is_land_beyond_Perekop.webp",
    totalPages: 392,
    recommend: true,
  },
  {
    _id: "6550a78a6a35493225696505",
    title:
      "For young children about everything in the world. Encyclopedia in fairy tales",
    author: "Sasha Dermansky",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_For_young_children_about_everything_in_the_world._Encyclopedia_in_fairy_tales.webp",
    totalPages: 160,
    recommend: true,
  },
  {
    _id: "6550a7da6a35493225696509",
    title: "White ashes",
    author: "Illarion Pavliuk",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_White_ashes.webp",
    totalPages: 352,
    recommend: true,
  },
  {
    _id: "6550a85f6a3549322569650d",
    title: "The tigers",
    author: "Ivan Bahrianyi",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_The_tigers.webp",
    totalPages: 304,
    recommend: true,
  },
  {
    _id: "6550a8e46a35493225696511",
    title: "Red",
    author: "Andriy Kokotiukha",
    imageUrl:
      "https://ftp.goit.study/img/readjourney/6546d503efab13a4ce5618a1_Red.webp",
    totalPages: 320,
    recommend: true,
  },
];

const RecommendedList = () => {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-x-[21px] md:gap-x-[28px] md:gap-y-[28px] lg:gap-x-[20px] lg:gap-y-[27px]">
      {recommendations.map((recommendation) => (
        <li key={recommendation._id}>
          <RecommendedItem book={recommendation} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
