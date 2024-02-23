import Pagination from "./pagination";
import RecommendedList from "./recommended-list";

const RecommendedSection = () => {
  return (
    <div className="py-[40px] px-[20px] md:px-[40px] bg-stone-900 rounded-3xl">
      <div className="flex justify-between items-start mb-[22px] md:mb-[20px]">
        <h3 className="text-stone-50 text-xl md:text-3xl font-bold leading-tight ">
          Recommended
        </h3>
        <Pagination />
      </div>
      <RecommendedList />
    </div>
  );
};

export default RecommendedSection;
