"use server";

import prisma from "../../lib/prisma";

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
