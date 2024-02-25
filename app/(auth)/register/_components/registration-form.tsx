"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@/schemas";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import Input from "@/components/ui/input";

import { Eye, EyeOff } from "lucide-react";
import AuthProviders from "@/providers/auth-provider";

interface IRegisterValues {
  name: string;
  mail: string;
  password: string;
}

const RegistrationForm = () => {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );
  const {
    register,
    handleSubmit,
    reset,
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

  const onSubmit = (data: IRegisterValues) => {
    reset();
  };

  const onPasswordTypeChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="md:w-[472px]"
    >
      <div className="flex flex-col gap-2 md:gap-[14px] mb-5 md:mb-[82px]">
        <Input
          errors={errors}
          touchedFields={touchedFields}
          type="name"
          heading="Name"
          placeholder="Ilona Ratushniak"
          register={register}
          padding="pl-[59px] md:pl-[65px]"
        />

        <Input
          errors={errors}
          touchedFields={touchedFields}
          type="mail"
          heading="Mail"
          placeholder="Your@mail.com"
          register={register}
          padding="pl-[49px] md:pl-[53px]"
        />

        <Input
          errors={errors}
          touchedFields={touchedFields}
          type="password"
          heading="Password"
          placeholder="Yourpasswordhere"
          register={register}
          inputType={passwordType}
          padding="pl-[78px] md:pl-[86px]"
        >
          {passwordType === "text" ? (
            <button
              className="absolute top-[50%] translate-y-[-50%] right-10"
              onClick={onPasswordTypeChange}
              type="button"
            >
              <Eye className="stroke-primary h-[18px] w-[18px] md:h-[20px] md:w-[20px]" />
            </button>
          ) : (
            <button
              className="absolute top-[50%] translate-y-[-50%] right-10"
              onClick={onPasswordTypeChange}
              type="button"
            >
              <EyeOff className="stroke-primary h-[18px] w-[18px] md:h-[20px] md:w-[20px]" />
            </button>
          )}
        </Input>
      </div>
      <div className="flex items-center  gap-[14px]">
        <AuthProviders />
        <Button type="submit" className="px-11 py-[11px] md:px-14 md:py-6">
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
