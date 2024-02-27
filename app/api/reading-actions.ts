"use server";
import prisma from "@/lib/prisma";
import { IUser } from "@/types";

export const startBook = async ({
  id,
  email,
}: {
  id: string;
  email: string | null | undefined;
}) => {
  if (!email || !id) {
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

  const book = await prisma.userbook.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!book) {
    return;
  }

  const { id: bookId, ...data } = book;

  await prisma.userbook.update({
    data: { ...data, status: "in progress" },
    where: {
      userId: user.id,
      id,
    },
  });
};

export const finishBook = async ({
  id,
  email,
}: {
  id: string;
  email: string | null | undefined;
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

  const book = await prisma.userbook.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!book) {
    return;
  }

  const { id: bookId, ...data } = book;

  await prisma.userbook.update({
    data: {
      ...data,
      status: "done",
    },
    where: {
      userId: user.id,
      id,
    },
  });
};

export const startReading = async ({
  id,
  page,
  email,
}: {
  id: string;
  page: number;
  email: string | null | undefined;
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

  const book = await prisma.userbook.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!book) return;

  const { id: bookId, ...rest } = book;

  const progress = await prisma.progress.create({
    data: {
      startPage: page,
      startReading: new Date(),
      status: "active",
      userbookId: id,
    },
  });

  await prisma.userbook.update({
    where: {
      id: book.id,
    },
    data: {
      ...rest,
    },
  });
};
