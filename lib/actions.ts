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
