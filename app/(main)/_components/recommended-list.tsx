import RecommendedItem from "./recommended-item";

import { getBooks } from "@/app/api/data";

import { IBook } from "@/types";

const RecommendedList = async () => {
  const recommendations: IBook[] = await getBooks({ limit: 10 });

  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-[21px] md:gap-x-[28px] md:gap-y-[28px] lg:gap-x-[20px] lg:gap-y-[27px]">
      {recommendations.map((recommendation) => (
        <li key={recommendation.id}>
          <RecommendedItem book={recommendation} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
