"use server";

import prisma from "@/lib/prisma";

export const addBook = async ({
  email,
  title,
  author,
  totalPages,
}: {
  email: string | null | undefined;
  title: string;
  author: string;
  totalPages: number;
}) => {
  const data = {
    title,
    author,
    imageUrl:
      "https://mgbookvillage.files.wordpress.com/2018/02/cover_reveal.png?w=548&h=565",
    totalPages,
    recommend: true,
  };
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

  await prisma.book.create({
    data: {
      ...data,
      userId: user?.id,
    },
  });
};

export const deleteBook = async ({ id }: { id: string }) => {
  await prisma.book.delete({
    where: {
      id,
    },
  });
};
