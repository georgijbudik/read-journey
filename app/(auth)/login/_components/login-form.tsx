"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

interface ILoginValues {
  mail: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<ILoginValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
    mode: "all",
  });

  const onShowPasswordChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<ILoginValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mb-[72px]">
        <div>
          <div className="relative">
            <input
              placeholder="Your@email.com"
              className={cn(
                "w-full h-full py-4 pl-[50px]  text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
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
                "w-full h-full py-4 pl-[80px] text-primary text-xs md:text-sm md:font-medium relative rounded-xl bg-muted border border-muted outline-0",
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
      <div className="flex items-center gap-[14px]">
        <Button
          type="submit"
          className="px-11 md:px-7 py-[11px] md:py-[7px] rounded-3xl bg-primary text-neutral-800 border border-stone-50 border-opacity-20 text-sm md:text-base font-bold leading-none tracking-tight hover:text-primary hover:bg-transparent transition-all duration-300"
        >
          Log in
        </Button>
        <Link
          href="/register"
          className="text-center text-stone-500 text-xs font-medium underline leading-none"
        >
          Don&apos;t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
