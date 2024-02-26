"use client";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { startReadingSchema } from "@/schemas/startReadingSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface IStartReading {
  pages: number;
}

const Dashboard = ({
  onToggleInterval,
  isStarted,
}: {
  onToggleInterval: () => void;
  isStarted: boolean;
}) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm<IStartReading>({
    resolver: yupResolver(startReadingSchema),
    mode: "all",
  });

  const onSubmit = async (data: IStartReading) => {
    onToggleInterval();
    let value = 0;
    const count = setInterval(() => {
      value += 1;
    }, 1000);
  };

  return (
    <form
      className="md:mr-10 md:w-1/2 lg:w-full lg:mr-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-primary text-[10px] mb-2 pl-[14px] md:text-sm">
        {isStarted ? "Stop page" : "Start page"}
      </p>

      <Input
        touchedFields={touchedFields}
        errors={errors}
        type="pages"
        heading="Page number"
        placeholder="0"
        register={register}
        padding="pl-[99px] md:pl-[111px]"
      />

      <Button
        type="submit"
        className="text-sm mb-10 mt-5 text-primary bg-transparent py-2.5 px-5 md:px-7 md:py-3 border border-[rgba(249,249,249, 0.2)] rounded-[30px] md:text-base lg:py-3"
        variant="outline"
        disabled={!isValid}
      >
        {isStarted ? "To stop" : "To start"}
      </Button>
    </form>
  );
};

export default Dashboard;
