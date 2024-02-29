"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import Input from "@/components/ui/input";

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import AuthProviders from "@/providers/auth-provider";
import { toast } from "sonner";

interface ILoginValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { refresh } = useRouter();

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<ILoginValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onPasswordTypeChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  const onSubmit = async (data: ILoginValues, e: any) => {
    try {
      e.preventDefault();

      const { email, password } = data;

      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid email or password");
      } else {
        refresh();
        toast.success("Welcome back");
      }

      reset();
    } catch (error: any) {
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="md:w-[472px] md:flex-grow md:flex md:flex-col md:justify-between"
    >
      <div className="flex flex-col gap-2 md:gap-[14px] mb-[72.5px] md:mb-0">
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

      <div className="flex items-center  gap-[14px]">
        <Button type="submit" className="px-11 py-[11px] md:px-14 md:py-6">
          Log in
        </Button>
        <Link
          href="/register"
          className="text-center text-secondary text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          Don&apos;t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
