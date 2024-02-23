"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { addBookSchema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import AddBookModal from "./add-book-modal";

import { AlertCircle, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

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
          <div>
            <div className="relative">
              <input
                placeholder="Enter text"
                className={cn(
                  "w-full h-full py-4 pl-[86px] md:pl-[86px] text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
                  touchedFields.title
                    ? errors.title
                      ? "border border-accent-red"
                      : "border border-accent-green"
                    : ""
                )}
                {...register("title")}
              />

              {touchedFields.title ? (
                errors.title ? (
                  <AlertCircle
                    className={cn(
                      "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                      touchedFields.title
                        ? errors.title
                          ? "block stroke-accent-red"
                          : "hidden"
                        : ""
                    )}
                    size={18}
                  />
                ) : (
                  <CheckCircle2
                    className={cn(
                      "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                      touchedFields.title
                        ? errors.title
                          ? "hidden"
                          : "block stroke-accent-green"
                        : ""
                    )}
                    size={18}
                  />
                )
              ) : null}

              <p className="text-xs md:text-sm text-secondary absolute top-[50%] translate-y-[-50%] left-[14px] inline-block">
                Book title:{" "}
              </p>
            </div>

            {errors?.title && touchedFields.title ? (
              <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
                {errors.title.message}
              </p>
            ) : null}
          </div>
          <div>
            <div className="relative">
              <input
                placeholder="Enter text"
                className={cn(
                  "w-full h-full py-4 pl-[95px] md:pl-[95px] text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
                  touchedFields.author
                    ? errors.author
                      ? "border border-accent-red"
                      : "border border-accent-green"
                    : ""
                )}
                {...register("author")}
              />

              {touchedFields.author ? (
                errors.author ? (
                  <AlertCircle
                    className={cn(
                      "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                      touchedFields.author
                        ? errors.author
                          ? "block stroke-accent-red"
                          : "hidden"
                        : ""
                    )}
                    size={18}
                  />
                ) : (
                  <CheckCircle2
                    className={cn(
                      "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                      touchedFields.author
                        ? errors.author
                          ? "hidden"
                          : "block stroke-accent-green"
                        : ""
                    )}
                    size={18}
                  />
                )
              ) : null}

              <p className="text-xs md:text-sm text-secondary absolute top-[50%] translate-y-[-50%] left-[14px] inline-block">
                The author:{" "}
              </p>
            </div>

            {errors?.author && touchedFields.author ? (
              <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
                {errors.author.message}
              </p>
            ) : null}
          </div>
          <div>
            <div className="relative">
              <input
                placeholder="0"
                className={cn(
                  "w-full h-full py-4 pl-[135px] md:pl-[135px] text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
                  touchedFields.pages
                    ? errors.pages
                      ? "border border-accent-red"
                      : "border border-accent-green"
                    : ""
                )}
                {...register("pages")}
              />

              {touchedFields.pages ? (
                errors.pages ? (
                  <AlertCircle
                    className={cn(
                      "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                      touchedFields.pages
                        ? errors.pages
                          ? "block stroke-accent-red"
                          : "hidden"
                        : ""
                    )}
                    size={18}
                  />
                ) : (
                  <CheckCircle2
                    className={cn(
                      "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                      touchedFields.pages
                        ? errors.pages
                          ? "hidden"
                          : "block stroke-accent-green"
                        : ""
                    )}
                    size={18}
                  />
                )
              ) : null}

              <p className="text-xs md:text-sm text-secondary absolute top-[50%] translate-y-[-50%] left-[14px] inline-block">
                Number of pages:{" "}
              </p>
            </div>

            {errors?.pages && touchedFields.pages ? (
              <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
                {errors.pages.message}
              </p>
            ) : null}
          </div>
        </div>
        <AddBookModal isDirty={isDirty} isValid={isValid} />
      </form>
    </div>
  );
};

export default AddBookForm;
