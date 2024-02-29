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

  var mime = file.type;
  var encoding = "base64";
  var base64Data = Buffer.from(arrayBuffer).toString("base64");
  var fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

  return new Promise((resolve, reject) => {
    var result = cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
      })
      .then((result: any) => {
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
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
