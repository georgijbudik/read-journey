import { startReading } from "@/app/api/reading-actions";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { startReadingSchema } from "@/schemas/startReadingSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

interface IStartReading {
  startPage: number;
}

const StartForm = ({
  bookId,
  toggleIsStarted,
}: {
  bookId: string;
  toggleIsStarted: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<IStartReading>({
    resolver: yupResolver(startReadingSchema),
    mode: "all",
  });

  const { data } = useSession();

  const email = data?.user?.email;

  const onSubmit = async (data: IStartReading) => {
    toggleIsStarted();

    await startReading({ id: bookId, startPage: data.startPage, email });

    // if (isStarted) {
    //   if (finishPage < startPage) {
    //     return "error";
    //   }
    //   setfinishPage(data.finishPage);
    //   await stopReading({ id: bookId, finishPage, email });
    //   setfinishPage(1);
    // } else {
    //   setStartPage(data.startPage);
    // }
  };
  return (
    <form
      className="md:mr-10 md:w-1/2 lg:w-full lg:mr-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-primary text-[10px] mb-2 pl-[14px] md:text-sm">
        Start page
      </p>

      <Input
        touchedFields={touchedFields}
        errors={errors}
        type="startPage"
        heading="Page number"
        placeholder="0"
        register={register}
        padding="pl-[99px] md:pl-[111px]"
      />

      <Button
        type="submit"
        className="text-sm mb-10 mt-5 text-primary bg-transparent py-2.5 px-5 md:px-7 md:py-3 border border-[rgba(249,249,249, 0.2)] rounded-[30px] md:text-base lg:py-3"
        variant="outline"
      >
        To start
      </Button>
    </form>
  );
};

export default StartForm;
