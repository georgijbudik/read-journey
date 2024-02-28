"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "@/schemas";

import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UserAvatar from "./user-avatar";

import { updateUser } from "@/app/api/user-actions";

import { toast } from "sonner";

interface IUserFormValues {
  name: string;
  email: string;
}

const UserForm = () => {
  const { refresh } = useRouter();

  const { data: sessionData, update } = useSession();
  const email = sessionData?.user?.email || "";
  const name = sessionData?.user?.name || "";

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isDirty, isValid },
    setValue,
  } = useForm<IUserFormValues>({
    resolver: yupResolver(updateUserSchema),
    mode: "all",
  });

  useEffect(() => {
    if (sessionData) {
      setValue("email", email || "");
      setValue("name", name || "");
    }
  }, [sessionData, setValue]);

  const onSubmit = async (data: IUserFormValues, e: any) => {
    try {
      e.preventDefault();

      const { name } = data;

      await update({
        ...sessionData,
        user: {
          ...sessionData?.user,
          name,
        },
      });

      await updateUser({ email: email as string, name });

      toast.success(`You have changed name to ${name}`);

      refresh();
    } catch (error) {
      toast.success(`Something went wrong. Try again`);
    }
  };

  return (
    <div>
      <p className="text-stone-50 text-xs md:text-sm font-medium leading-3 md:leading-none ml-[14px] mb-2">
        Profile settings:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-col gap-2 mb-5">
          <UserAvatar />

          <Input
            errors={errors}
            touchedFields={touchedFields}
            type="email"
            heading="The email"
            placeholder="Enter text"
            register={register}
            padding="pl-[77px] md:pl-[86px]"
            disabled
          />

          <Input
            errors={errors}
            touchedFields={touchedFields}
            type="name"
            heading="The name"
            placeholder="Enter text"
            register={register}
            padding="pl-[77px] md:pl-[86px]"
          />
        </div>

        <Button
          className="px-5 md:px-7 py-2.5 md:py-3"
          type="submit"
          disabled={!isValid || !isDirty}
          variant="outline"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
