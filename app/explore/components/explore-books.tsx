import Rate from "@/app/(home)/components/rate";
import { Card, CardContent } from "@/app/_components/ui/card";
import { db } from "@/app/_lib/prisma";
import Image from "next/image";

const ExploreBooks = async () => {
  const books = await db.book.findMany({
    include: {
      ratings: true,
    },
    orderBy: { name: "asc" },
  });
  return (
    <div className="grid grid-cols-4 gap-6 md:grid md:grid-cols-3">
      {books.map((book) => {
        const rating = book.ratings[0];
        const ratingValue = rating ? rating.rate : 0;
        return (
          <Card key={book.id} className="rounded-lg bg-gray-700 pt-4">
            <CardContent className="flex gap-4">
              <Image
                src={book.cover_url}
                alt={`Imagem do livro ${book.name}`}
                width={108}
                height={152}
                className="rounded-md object-cover"
              />

              <div className="flex flex-col">
                <h2 className="line-clamp-2 text-sm font-bold text-gray-100">
                  {book.name}
                </h2>
                <p className="text-xs text-gray-400">{book.author}</p>
                <div className="mt-auto">
                  <Rate size={5} value={ratingValue} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ExploreBooks;
