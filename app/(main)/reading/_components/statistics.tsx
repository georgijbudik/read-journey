import CircleProgress from "./circle-progress";

const Statistics = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm font-medium text-secondary hidden lg:block lg:mb-5">
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <div className="flex flex-col items-center bg-[#262626] w-full rounded-[15px] pt-[31px] pb-5 md:py-7 lg:py-5">
        <CircleProgress />
        <div className="flex mx-auto">
          <div className="flex">
            <span className="bg-accent-green w-[14px] h-[14px] rounded"></span>
          </div>
          <div className="flex flex-col ml-[15px]">
            <p className="text-primary text-sm md:text-xl leading-[18px] md:leading-5 mb-1 md:mb-2">
              19.14%
            </p>
            <p className="text-secondary text-[10px] md:text-xs">
              171 pages read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
