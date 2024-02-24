"use server";

import db from "@/lib/db";

export const getBooks = async ({ limit = 3 }: { limit?: number }) => {
  const books = await db.book.findMany({ take: limit });

  return books;
};
