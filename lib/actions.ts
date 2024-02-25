import prisma from "./prisma";

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
  imageUrl = "",
}: {
  name: string;
  email: string;
  imageUrl?: string;
  password?: string;
}) => {
  try {
    const data = {
      name,
      email,
      password,
      imageUrl,
      token: "",
    };

    return await prisma.user.create({ data });
  } catch (error: any) {
    return error.message;
  }
};
