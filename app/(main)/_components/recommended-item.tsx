interface IRecommededItemProps {
  item: string;
}

const RecommendedItem = ({ item }: IRecommededItemProps) => {
  return (
    <div>
      <p className="text-primary">{item}</p>
    </div>
  );
};

export default RecommendedItem;
