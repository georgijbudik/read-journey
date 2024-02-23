import RecommendedItem from "./recommended-item";

const recommendations = ["1", "2", "3", "4", "5", "6", "7", "8"];

const RecommendedList = () => {
  return (
    <ul className="flex flex-wrap items-center">
      {recommendations.map((recommendation) => (
        <li key={recommendation}>
          <RecommendedItem item={recommendation} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
