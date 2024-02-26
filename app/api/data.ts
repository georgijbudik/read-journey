"use server";

import prisma from "@/lib/prisma";

export const getBooks = async ({
  limit = 3,
  page = 1,
}: {
  limit: number;
  page: number;
}) => {
  const skip = (page - 1) * limit;

  const books = await prisma.book.findMany({ take: limit, skip });

  return books;
};

export const getUserBooks = async (email: string | null | undefined) => {
  if (!email) {
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return;
  }

  const books = await prisma.book.findMany({
    where: {
      userId: user.id,
    },
  });

  return books;
};
