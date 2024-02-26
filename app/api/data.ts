"use server";

import prisma from "@/lib/prisma";

export const getBooks = async ({ limit = 3 }: { limit?: number }) => {
  const books = await prisma.book.findMany({ take: limit });

  return books;
};

export const getUserBooks = async (
  email: string | null | undefined,
  status: string
) => {
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

  if (!status) {
    return await prisma.userbook.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  const books = await prisma.userbook.findMany({
    where: {
      userId: user.id,
      status,
    },
  });

  return books;
};
