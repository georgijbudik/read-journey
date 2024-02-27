"use server";

import prisma from "@/lib/prisma";

export const getBooks = async ({
  limit = 3,
  page = 1,
  title,
  author,
}: {
  limit: number;
  page: number;
  title?: string;
  author?: string;
}) => {
  const skip = (page - 1) * limit;

  const totalCount = await prisma.book.count({
    where: {
      title: {
        contains: title,
        mode: "insensitive",
      },
      author: {
        contains: author,
        mode: "insensitive",
      },
    },
  });

  const books = await prisma.book.findMany({
    take: limit,
    skip,
    where: {
      title: {
        contains: title,
        mode: "insensitive",
      },
      author: {
        contains: author,
        mode: "insensitive",
      },
    },
  });

  const hasPrevPage = page > 1;
  const hasNextPage = skip + books.length < totalCount;

  return {
    data: books,
    meta: {
      totalCount,
      currentPage: page,
      hasPrevPage,
      hasNextPage,
    },
  };
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
