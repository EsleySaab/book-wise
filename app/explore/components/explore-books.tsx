import { db } from "@/app/_lib/prisma";
import ExploreBookCard from "./explore-book-dialog";

const ExploreBooks = async () => {
  const books = await db.book.findMany({
    include: {
      ratings: true,
      categories: { include: { category: true } },
    },
    orderBy: { name: "asc" },
  });

  const allRatings = books.flatMap((book) => book.ratings);

  return (
    <div className="grid grid-cols-4 gap-6 md:grid md:grid-cols-3">
      {books.map((book) => {
        const rating = book.ratings[0];
        const ratingValue = rating ? rating.rate : 0;
        const bookCategories = book.categories.map(
          (category) => category.category.name,
        );

        return (
          <ExploreBookCard
            key={book.id}
            bookName={book.name}
            coverUrl={book.cover_url}
            alt={`Imagem do livro ${book.name}}`}
            bookAuthor={book.author}
            bookRating={ratingValue}
            bookCategories={bookCategories}
            bookPages={book.total_pages}
            ratings={allRatings}
          />
        );
      })}
    </div>
  );
};

export default ExploreBooks;
