"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@/schemas/registrationSchema";
import { cn } from "@/lib/utils";

interface IRegisterValues {
  name: string;
  mail: string;
  password: string;
}

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<IRegisterValues>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      name: "",
      mail: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<IRegisterValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mb-2">
        <input
          className={cn(
            "w-full h-full py-[14px] pl-[59px] text-primary text-xs relative rounded-xl bg-muted outline-0",
            touchedFields.name
              ? errors.name
                ? "border border-accent-red"
                : "border border-accent-green"
              : ""
          )}
          {...register("name")}
        />
        <p className="text-xs text-secondary absolute top-[14px] left-[14px] inline-block">
          Name:{" "}
        </p>
        {errors?.name && touchedFields.name ? (
          <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
            {errors.name.message}
          </p>
        ) : null}
      </div>
      <div className="relative mb-2">
        <input
          className={cn(
            "w-full h-full py-[14px] pl-[49px] text-primary text-xs relative rounded-xl bg-muted outline-0",
            touchedFields.mail
              ? errors.mail
                ? "border border-accent-red"
                : "border border-accent-green"
              : ""
          )}
          {...register("mail")}
        />
        <p className="text-xs text-secondary absolute top-[14px] left-[14px] inline-block">
          Mail:{" "}
        </p>
        {errors?.mail && touchedFields.mail ? (
          <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
            {errors.mail.message}
          </p>
        ) : null}
      </div>
      <div className="relative mb-5">
        <input
          className={cn(
            "w-full h-full py-[14px] pl-[78px] text-primary text-xs relative rounded-xl bg-muted outline-0",
            touchedFields.password
              ? errors.password
                ? "border border-accent-red"
                : "border border-accent-green"
              : ""
          )}
          {...register("password")}
        />
        <p className="text-xs text-secondary absolute top-[14px] left-[14px] inline-block">
          Password:{" "}
        </p>
        {errors?.password && touchedFields.password ? (
          <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
            {errors.password.message}
          </p>
        ) : null}
      </div>
      <div className="">
        <Button
          type="submit"
          className="bg-primary text-button-text font-bold rounded-[30px] py-3 mr-[14px]"
        >
          Registration
        </Button>
        <Link
          href="/login"
          className="text-sm text-secondary underline underline-offset-1"
        >
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
