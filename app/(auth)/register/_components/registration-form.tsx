"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@/schemas";
import { cn } from "@/lib/utils";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
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
    <form onSubmit={handleSubmit(onSubmit)} className="md:w-[472px]">
      <div className="relative mb-2">
        <input
          className={cn(
            "w-full h-full py-[14px] md:py-4 pl-[59px] md:pl-[65px] text-primary text-xs relative rounded-xl bg-muted outline-0",
            touchedFields.name
              ? errors.name
                ? "border border-accent-red"
                : "border border-accent-green"
              : ""
          )}
          {...register("name")}
        />
        <AlertCircle
          className={cn(
            "absolute hidden right-[18px] top-[13px]",
            touchedFields.name
              ? errors.name
                ? "block stroke-accent-red"
                : "hidden"
              : ""
          )}
          size={18}
        />
        <p className="text-xs md:text-sm text-secondary absolute top-[14px] left-[14px] inline-block">
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
            "w-full h-full py-[14px] md:py-4 pl-[49px] md:pl-[53px] text-primary text-xs relative rounded-xl bg-muted outline-0",
            touchedFields.mail
              ? errors.mail
                ? "border border-accent-red"
                : "border border-accent-green"
              : ""
          )}
          {...register("mail")}
        />
        <AlertCircle
          className={cn(
            "absolute hidden right-[18px] top-[13px]",
            touchedFields.mail
              ? errors.mail
                ? "block stroke-accent-red"
                : "hidden"
              : ""
          )}
          size={18}
        />
        <p className="text-xs md:text-sm text-secondary absolute top-[14px] left-[14px] inline-block">
          Mail:{" "}
        </p>
        {errors?.mail && touchedFields.mail ? (
          <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
            {errors.mail.message}
          </p>
        ) : null}
      </div>
      <div className="relative mb-5 md:mb-[82px]">
        <input
          className={cn(
            "w-full h-full py-[14px] md:py-4 pl-[78px] md:pl-[86px] text-primary text-xs relative rounded-xl bg-muted outline-0",
            touchedFields.password
              ? errors.password
                ? "border border-accent-red"
                : "border border-accent-green"
              : ""
          )}
          type={showPassword ? "text" : "password"}
          {...register("password")}
        />
        <button
          type="button"
          onClick={onShowPasswordChange}
          className="group absolute right-[15px] top-[50%] translate-y-[-50%]"
        >
          <svg className="h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-accent group-hover:scale-110 transition-all duration-300">
            {showPassword ? <Eye /> : <EyeOff />}
          </svg>
        </button>
        <AlertCircle
          className={cn(
            "absolute hidden right-[18px] top-[13px]",
            touchedFields.password
              ? errors.password
                ? "block stroke-accent-red"
                : "hidden"
              : ""
          )}
          size={18}
        />
        <p className="text-xs md:text-sm text-secondary absolute top-[14px] left-[14px] inline-block">
          Password:{" "}
        </p>
        {errors?.password && touchedFields.password ? (
          <p className="text-[10px] text-accent-red mt-1 pl-[14px]">
            {errors.password.message}
          </p>
        ) : null}
      </div>
      <div>
        <Button
          type="submit"
          className="bg-primary text-button-text font-bold rounded-[30px] py-3 mr-[14px] md:py-4 md:w-[225px] md:text-xl md:mr-5 md:h-[52px] hover:text-primary hover:bg-transparent hover:border hover:border-[rgba(249,249,249,0.2)] transition-all duration-300"
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
