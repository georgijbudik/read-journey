"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@/schemas";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface IRegisterValues {
  name: string;
  mail: string;
  password: string;
}

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
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

  const onShowPasswordChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="md:w-[472px]"
    >
      <div className="flex flex-col gap-2 md:gap-[14px] mb-5 md:mb-[82px]">
        <div>
          <div className="relative">
            <input
              placeholder="Ilona Ratushniak"
              className={cn(
                "w-full h-full py-[14px] md:py-4 pl-[60px] text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
                touchedFields.name
                  ? errors.name
                    ? "border border-accent-red"
                    : "border border-accent-green"
                  : ""
              )}
              {...register("name")}
            />

            {touchedFields.name ? (
              errors.name ? (
                <AlertCircle
                  className={cn(
                    "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                    touchedFields.name
                      ? errors.name
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
                    touchedFields.name
                      ? errors.name
                        ? "hidden"
                        : "block stroke-accent-green"
                      : ""
                  )}
                  size={18}
                />
              )
            ) : null}

            <p className="text-xs md:text-sm text-secondary absolute top-[50%] translate-y-[-50%] left-[14px] inline-block">
              Name:{" "}
            </p>
          </div>

          {errors?.name && touchedFields.name ? (
            <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <div className="relative">
            <input
              placeholder="Your@email.com"
              className={cn(
                "w-full h-full py-[14px] md:py-4 pl-[50px]  text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
                touchedFields.mail
                  ? errors.mail
                    ? "border border-accent-red"
                    : "border border-accent-green"
                  : ""
              )}
              {...register("mail")}
            />

            {touchedFields.mail ? (
              errors.mail ? (
                <AlertCircle
                  className={cn(
                    "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                    touchedFields.mail
                      ? errors.mail
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
                    touchedFields.mail
                      ? errors.mail
                        ? "hidden"
                        : "block stroke-accent-green"
                      : ""
                  )}
                  size={18}
                />
              )
            ) : null}

            <p className="text-xs md:text-sm text-secondary absolute top-[50%] translate-y-[-50%] left-[14px] inline-block">
              Mail:{" "}
            </p>
          </div>

          {errors?.mail && touchedFields.mail ? (
            <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
              {errors.mail.message}
            </p>
          ) : null}
        </div>
        <div>
          <div className="relative">
            <input
              placeholder="Yourpasswordhere"
              className={cn(
                "w-full h-full py-[14px] md:py-4 pl-[78px]  text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
                touchedFields.password
                  ? errors.password
                    ? "border border-accent-red"
                    : "border border-accent-green"
                  : ""
              )}
              {...register("password")}
            />

            {touchedFields.password ? (
              errors.password ? (
                <AlertCircle
                  className={cn(
                    "absolute hidden top-[50%] translate-y-[-50%] right-[14px]",
                    touchedFields.password
                      ? errors.password
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
                    touchedFields.password
                      ? errors.password
                        ? "hidden"
                        : "block stroke-accent-green"
                      : ""
                  )}
                  size={18}
                />
              )
            ) : null}

            <p className="text-xs md:text-sm text-secondary absolute top-[50%] translate-y-[-50%] left-[14px] inline-block">
              Password:{" "}
            </p>
          </div>

          {errors?.password && touchedFields.password ? (
            <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
              {errors.password.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex items-center  gap-[14px]">
        <Button
          type="submit"
          className="px-11 py-[11px] md:px-14 md:py-6 rounded-3xl bg-primary text-neutral-800 border border-stone-50 border-opacity-20 text-sm md:text-xl font-bold leading-none md:leading-tight tracking-tight hover:text-primary hover:bg-transparent transition-all duration-300"
        >
          Registration
        </Button>
        <Link
          href="/login"
          className="text-center text-stone-500 text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
