"use server";

import prisma from "@/lib/prisma";

export const getBooks = async ({ limit = 3 }: { limit?: number }) => {
  const books = await prisma.book.findMany({ take: limit });

  return books;
};
