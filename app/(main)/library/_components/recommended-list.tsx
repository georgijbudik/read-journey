import { IBook } from "@/types";

import RecommendedItem from "./recommended-item";

import { getBooks } from "@/app/api/data";

const RecommendedList = async () => {
  const recommendations: IBook[] = await getBooks({});

  return (
    <ul className="flex items-center justify-center md:justify-start gap-5">
      {recommendations.map((recommendation) => (
        <li key={recommendation.id}>
          <RecommendedItem book={recommendation} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
