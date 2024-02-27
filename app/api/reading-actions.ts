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
  startPage,
  email,
}: {
  id: string;
  startPage: number;
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

  await prisma.progress.create({
    data: {
      startPage: startPage,
      startReading: new Date(),
      status: "active",
      userbookId: book.id,
    },
  });
};

export const stopReading = async ({
  id,
  finishPage,
  email,
}: {
  id: string;
  finishPage: number;
  email: string | null | undefined;
}) => {
  if (!email) return;
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

  const progress = await prisma.progress.findFirst({
    where: {
      userbookId: book.id,
    },
  });
  if (!progress) return;

  await prisma.progress.update({
    where: {
      id: progress.id,
    },
    data: {
      finishPage,
      finishReading: new Date(),
      status: "inactive",
    },
  });
};
