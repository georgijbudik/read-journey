import { Star } from "lucide-react";

const Progress = () => {
  return (
    <>
      <h4 className="text-primary text-lg mb-[14px]">Progress</h4>
      <p className="text-secondary text-sm mb-5">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className="flex mx-auto w-[80px] h-[80px] rounded-[50%] bg-muted">
        <Star size={80} color="yellow" />
      </div>
    </>
  );
};

export default Progress;
