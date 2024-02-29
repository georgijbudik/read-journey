"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@/schemas";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import Input from "@/components/ui/input";
import AuthProviders from "@/providers/auth-provider";

import { Eye, EyeOff } from "lucide-react";

import { toast } from "sonner";

interface IRegisterValues {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const { push } = useRouter();

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
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (data: IRegisterValues) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        push("/login");
      }

      reset();
    } catch (error) {
      toast.error("Something went wrong. Try again");
    }
  };

  const onPasswordTypeChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="md:w-[472px] md:flex-grow md:flex md:flex-col md:justify-between gap-5"
    >
      <div className="flex flex-col gap-2 md:gap-[14px] mb-5 md:mb-0">
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
          type="email"
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

        <AuthProviders />
      </div>

      <div className="flex items-center gap-[14px]">
        <Button type="submit" className="px-11 py-[11px] md:px-14 md:py-6">
          Registration
        </Button>
        <Link
          href="/login"
          className="text-center text-secondary text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
