import { Card, CardContent } from "@/app/_components/ui/card";
import { db } from "@/app/_lib/prisma";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PopularBooks = async () => {
  const books = await db.book.findMany({
    take: 4,
  });

  return (
    <div className="w-[324px]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-normal text-gray-100">Livros populares</p>
        <div className="flex items-center gap-3">
          <Link
            href="/explore"
            className="text-sm font-semibold leading-none text-purple-100"
          >
            Ver todos
          </Link>
          <ArrowRightIcon width={16} height={16} className="text-purple-100" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {books.map((book) => (
          <Card key={book.id} className="w-full rounded-lg bg-gray-700 pt-4">
            <CardContent className="flex gap-5">
              <Image
                src={book.cover_url}
                alt={`Imagem do livro ${book.name}`}
                width={64}
                height={94}
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-gray-100">{book.name}</h2>
                <p className="text-xs text-gray-400">{book.author}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
