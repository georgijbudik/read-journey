"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { addBookSchema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/ui/input";
import AddBookModal from "./add-book-modal";

interface IAddBookValues {
  title: string;
  author: string;
  pages: number;
}

const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isDirty, isValid },
  } = useForm<IAddBookValues>({
    resolver: yupResolver(addBookSchema),
    defaultValues: {
      title: "",
      author: "",
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<IAddBookValues> = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <p className="text-stone-50 text-xs md:text-sm font-medium leading-3 md:leading-none ml-[14px] mb-2">
        Create your library:
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-5">
          <Input
            errors={errors}
            touchedFields={touchedFields}
            type="title"
            heading="Book title"
            placeholder="Enter text"
            register={register}
            padding="pl-[77px] md:pl-[86px]"
          />

          <Input
            errors={errors}
            touchedFields={touchedFields}
            type="author"
            heading="The author"
            placeholder="Enter text"
            register={register}
            padding="pl-[85px] md:pl-[95px]"
          />

          <Input
            errors={errors}
            touchedFields={touchedFields}
            type="pages"
            heading="Number of pages"
            placeholder="0"
            register={register}
            padding="pl-[119px] md:pl-[135px]"
          />
        </div>
        <AddBookModal isDirty={isDirty} isValid={isValid} />
      </form>
    </div>
  );
};

export default AddBookForm;
