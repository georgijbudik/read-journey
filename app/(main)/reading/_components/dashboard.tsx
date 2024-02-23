"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IStartReading {
  pages: number;
}

export const schema = yup
  .object({
    pages: yup
      .number()
      .typeError("Pages must be a number*")
      .required("Pages are required*"),
  })
  .required();

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isDirty, isValid },
  } = useForm<IStartReading>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className="w-full bg-foreground rounded-[30px] pt-5 px-5 pb-10">
      <p className="text-primary text-[10px] mb-2 pl-[14px]">Stop page</p>
      <form>
        <div className="relative mb-5" onSubmit={onSubmit}>
          <input
            placeholder="0"
            className={cn(
              "w-full h-full py-4 pl-[99px] md:pl-[135px] text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
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
            Page number:{" "}
          </p>
        </div>

        {errors?.pages && touchedFields.pages ? (
          <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
            {errors.pages.message}
          </p>
        ) : null}
        <Button
          type="submit"
          className="text-sm mb-10 text-primary bg-transparent py-2.5 border border-[rgba(249,249,249, 0.2)] rounded-[30px]"
        >
          To start
        </Button>
      </form>

      {children}
    </div>
  );
};

export default Dashboard;
