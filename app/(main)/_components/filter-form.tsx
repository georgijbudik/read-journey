"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface IFilterValues {
  title: string;
  author: string;
}

const FilterForm = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<IFilterValues>({
    defaultValues: {
      title: "",
      author: "",
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<IFilterValues> = async (data) => {
    const { title, author } = data;
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (title) {
      params.set("title", title);
    } else {
      params.delete("title");
    }

    if (author) {
      params.set("author", author);
    } else {
      params.delete("author");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <p className="text-stone-50 text-xs md:text-sm font-medium leading-3 md:leading-none ml-[14px] mb-2">
        Filters:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
        </div>

        <Button
          className="px-5 md:px-7 py-2.5 md:py-3"
          type="submit"
          variant="outline"
        >
          To apply
        </Button>
      </form>
    </div>
  );
};

export default FilterForm;
