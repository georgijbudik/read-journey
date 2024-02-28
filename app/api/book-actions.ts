"use server";

import prisma from "@/lib/prisma";

import { getUser } from "./user-actions";

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
  try {
    if (!email) return;

    const user = await getUser(email);

    if (!user) return;

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

    if (existingBook) return;

    await prisma.userbook.create({
      data: {
        ...data,
        userId: user?.id,
      },
    });
  } catch (error: any) {
    return error.message;
  }
};

export const deleteBook = async ({
  email,
  id,
}: {
  email: string | null | undefined;
  id: string;
}) => {
  try {
    if (!email) return;

    const user = await getUser(email);

    if (!user) return;

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
  } catch (error: any) {
    return error.message;
  }
};

export const clearLibrary = async (email: string | null | undefined) => {
  try {
    if (!email) return;

    const user = await getUser(email);

    if (!user) return;

    await prisma.userbook.deleteMany({
      where: {
        userId: user.id,
      },
    });
  } catch (error: any) {
    return error.message;
  }
};

export const getBookById = async ({
  email,
  bookId,
}: {
  email: string;
  bookId: string;
}) => {
  try {
    const user = await getUser(email);
    if (!user) return;
    const existingBook = await prisma.userbook.findUnique({
      where: {
        id: bookId,
        userId: user.id,
      },
    });
    return existingBook;
  } catch (error: any) {
    return error.message;
  }
};
