"use server";

import cloudinary from "@/utils/cloudinary";

import prisma from "../../lib/prisma";
import { ICloudinaryImage } from "@/types";

export const getUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error: any) {
    return error.message;
  }
};

export const createUser = async ({
  name,
  email,
  password = "",
  image = "",
}: {
  name: string;
  email: string;
  image?: string;
  password?: string;
}) => {
  try {
    const data = {
      name,
      email,
      password,
      image,
      token: "",
    };

    return await prisma.user.create({ data });
  } catch (error: any) {
    return error.message;
  }
};

export const updateUser = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  try {
    const user = await getUser(email);

    if (!user) return;

    const { id: userId, ...data } = user;

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...data,
        name,
      },
    });

    return {
      name: updatedUser.name,
    };
  } catch (error: any) {
    return error.message;
  }
};

export const updateImage = async (
  formData: FormData
): Promise<null | ICloudinaryImage> => {
  const file = formData.get("avatar") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader
      .upload_stream({}, function (error: any, result: any) {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      })
      .end(buffer);
  });
};

export const updateUserAvatar = async (
  email: string | null | undefined,
  image: string
) => {
  try {
    if (!email) return;

    const user = await getUser(email);

    if (!user) return;

    const { id: userId, ...data } = user;

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...data,
        image,
      },
    });

    return {
      image: updatedUser.image,
    };
  } catch (error: any) {
    return error.message;
  }
};
