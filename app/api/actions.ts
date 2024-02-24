"use server";

import db from "@/lib/db";

export const addBook = async ({
  title,
  author,
  totalPages,
}: {
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

  await db.book.create({ data });
};

export const deleteBook = async ({ id }: { id: string }) => {
  await db.book.delete({
    where: {
      id,
    },
  });
};
