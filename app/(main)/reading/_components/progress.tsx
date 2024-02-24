import { Star } from "lucide-react";

const Progress = () => {
  return (
    <div>
      <h4 className="text-primary text-lg mb-[14px] md:text-[20px]">
        Progress
      </h4>
      <p className="text-secondary text-sm mb-5 md:mb-[50px] lg:mb-[60px]">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className="flex mx-auto w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[50%] bg-muted justify-center items-center">
        <Star size={32} className="md:w-[50px] md:h-[70px]" color="yellow" />
      </div>
    </div>
  );
};

export default Progress;
