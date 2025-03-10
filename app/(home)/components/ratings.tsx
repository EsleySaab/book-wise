import { db } from "@/app/_lib/prisma";
import RatingCard from "./rating-card";

const Ratings = async () => {
  const ratings = await db.rating.findMany({
    include: {
      book: true,
    },
  });

  return (
    <>
      <div className="mb-5">
        {ratings.map((rating) => (
          <RatingCard
            ratingValue={rating.rate}
            key={rating.id}
            bookImage={rating.book.cover_url}
            alt={`Capa do livro ${rating.book.name}`}
            authorName={rating.book.author}
            bookName={rating.book.name}
            bookSummary={rating.book.summary}
          />
        ))}
      </div>
    </>
  );
};

export default Ratings;
