import { Circle } from "rc-progress";

const CircleProgress = () => {
  return (
    <div className="w-[116px] h-[116px] md:h-[138px] md:w-[138px] lg:h-[168px] lg:w-[168px] relative mb-[21px] md:mb-4">
      <Circle
        percent={15}
        strokeWidth={10}
        strokeColor="#30B94D"
        trailWidth={10}
        trailColor="#1F1F1F"
        className="absolute"
      />
      <p className="text-primary text-lg md:text-xl font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        100%
      </p>
    </div>
  );
};

export default CircleProgress;
