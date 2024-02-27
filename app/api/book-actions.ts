"use server";

import prisma from "@/lib/prisma";

export const addBook = async ({
  email,
  title,
  author,
  totalPages,
  imageUrl = "https://mgbookvillage.files.wordpress.com/2018/02/cover_reveal.png?w=548&h=565",
}: {
  email: string | null | undefined;
  title: string;
  author: string;
  totalPages: number;
  imageUrl?: string;
}) => {
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

  const data = {
    title,
    author,
    imageUrl,
    totalPages,
    status: "unread",
  };

  const existingBook = await prisma.userbook.findFirst({
    where: {
      title,
      userId: user.id,
    },
  });

  if (existingBook) {
    return;
  }

  await prisma.userbook.create({
    data: {
      ...data,
      userId: user?.id,
    },
  });
};

export const deleteBook = async ({
  email,
  id,
}: {
  email: string | null | undefined;
  id: string;
}) => {
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
  await prisma.progress.deleteMany({
    where: {
      userbookId: id,
    },
  });

  await prisma.userbook.delete({
    where: {
      id,
      userId: user.id,
    },
  });
};

export const clearLibrary = async (email: string | null | undefined) => {
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

  await prisma.userbook.deleteMany({
    where: {
      userId: user.id,
    },
  });
};

export const getBookById = async ({ id }: { id: string }) => {
  return await prisma.userbook.findUnique({ where: { id } });
};
