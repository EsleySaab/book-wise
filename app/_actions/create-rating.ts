"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/_lib/prisma";

interface CreateRatingProps {
  book_id: string;
  rating: number;
  description: string;
}

export const createRating = async ({
  book_id,
  rating,
  description,
}: CreateRatingProps) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  return await db.rating.create({
    data: {
      rate: rating,
      description,
      user_id: userId,
      book_id,
    },
  });
};
