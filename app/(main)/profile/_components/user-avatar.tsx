"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { updateImage, updateUserAvatar } from "@/app/api/user-actions";

import { ICloudinaryImage } from "@/types";

import { toast } from "sonner";

const UserAvatar = () => {
  const { refresh } = useRouter();
  const { update, data: sessionData } = useSession();

  const email = sessionData?.user?.email;
  const image = sessionData?.user?.image;
  const name = sessionData?.user?.name;

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  useEffect(() => {
    const updateAvatar = async () => {
      if (!file) return;
      const formData = new FormData();
      formData.append("avatar", file);

      const image: ICloudinaryImage | null = await updateImage(formData);
      if (!image) return;

      const { image: userAvatar } = await updateUserAvatar(email, image.url);

      await update({
        ...sessionData,
        user: {
          ...sessionData?.user,
          image: userAvatar,
        },
      });

      toast.success("You have changed profile avatar!");

      refresh();
    };

    updateAvatar();
  }, [file]);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {image ? (
        <div className="rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px]">
          <Image
            src={image}
            alt={name as string}
            width={100}
            height={100}
            className="rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px] object-cover"
          />
        </div>
      ) : (
        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] bg-secondary bg-opacity-20 rounded-full"></div>
      )}
      <label htmlFor="avatar">
        <input
          id="avatar"
          type="file"
          name="avatar"
          onChange={handleFileChange}
          className="hidden"
        />

        <span className="text-primary text-sm cursor-pointer hover:underline">
          Upload image
        </span>
      </label>
    </div>
  );
};

export default UserAvatar;
