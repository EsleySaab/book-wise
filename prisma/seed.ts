import { PrismaClient } from "@prisma/client";
import { books } from "./constants/books";
import { categories } from "./constants/categories";
import { ratings } from "./constants/ratings";

const prisma = new PrismaClient();

async function main() {
  await prisma.rating.deleteMany();
  await prisma.categoriesOnBooks.deleteMany();
  await prisma.category.deleteMany();
  await prisma.book.deleteMany();

  const categoriesSeed = categories.map((category) => {
    return prisma.category.create({
      data: {
        name: category.name,
        id: category.id,
      },
    });
  });

  const booksSeed = books.map((book) => {
    return prisma.book.create({
      data: {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        categories: {
          create: book.categories.map((category) => ({
            category: { connect: { id: category.id } },
          })),
        },
      },
    });
  });

  const ratingsSeed = ratings.map((rating) => {
    return prisma.rating.create({
      data: {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        book: { connect: { id: rating.book_id } },
        user_id: rating.user_id,
      },
    });
  });

  await prisma.$transaction([...categoriesSeed, ...booksSeed, ...ratingsSeed]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
