"use server";

import prisma from "@/lib/prisma";

export const addBook = async ({
  email,
  title,
  author,
  totalPages,
  imageUrl = "https://mgbookvillage.files.wordpress.com/2018/02/cover_reveal.png?w=548&h=565",
  id,
}: {
  email: string | null | undefined;
  title: string;
  author: string;
  totalPages: number;
  imageUrl?: string;
  id?: string;
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

  // if (!id) {
  //   return;
  // }

  // const existingBook = await prisma.userbook.findUnique({
  //   where: {
  //     id: id,
  //     userId: user.id,
  //   },
  // });

  // console.log(id);

  // if (existingBook) {
  //   return;
  // }

  await prisma.userbook.create({
    data: {
      ...data,
      userId: user?.id,
    },
  });
};

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

  await prisma.userbook.delete({
    where: {
      id,
      userId: user.id,
    },
  });
};
