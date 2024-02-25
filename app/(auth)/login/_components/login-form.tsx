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

interface ILoginValues {
  email: string;
  password: string;
}

const LoginForm = () => {
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
  const router = useRouter();

  const onPasswordTypeChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  const onSubmit = async (data: ILoginValues, e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      console.log(res.error);
    } else {
      router.refresh();
      router.push("/recommended");
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="md:w-[472px]"
    >
      <div className="flex flex-col gap-2 md:gap-[14px] mb-[72.5px] md:mb-[147px]">
        <Input
          errors={errors}
          touchedFields={touchedFields}
          type="email"
          heading="Email"
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
      <Button
        variant="default"
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/recommended" })}
      >
        Sign in with Google
      </Button>
      <div className="flex items-center  gap-[14px]">
        <Button type="submit" className="px-11 py-[11px] md:px-14 md:py-6">
          Log in
        </Button>
        <Link
          href="/register"
          className="text-center text-stone-500 text-xs md:text-sm font-medium underline leading-none hover:text-primary transition-all duration-300"
        >
          Don&apos;t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
