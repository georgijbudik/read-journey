import HintItem from "./hint-item";

import { IBook } from "@/types";

import { getBooks } from "@/app/api/data";

interface IHintListProps {
  page: number;
}

const HintList = async ({ page }: IHintListProps) => {
  const recommendations: IBook[] = await getBooks({ limit: 3, page });

  return (
    <ul className="flex items-center justify-center md:justify-center gap-5">
      {recommendations.map((recommendation) => (
        <li key={recommendation.id}>
          <HintItem book={recommendation} />
        </li>
      ))}
    </ul>
  );
};

export default HintList;
