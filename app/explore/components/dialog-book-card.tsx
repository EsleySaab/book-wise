import Rate from "@/app/(home)/components/rate";
import { Card, CardContent } from "@/app/_components/ui/card";
import { getRandomInt } from "@/app/_utils/get-random-informations";
import { Bookmark, BookOpenIcon } from "lucide-react";
import Image from "next/image";

interface DialogBookCard {
  coverUrl: string;
  alt: string;
  bookName: string;
  bookAuthor: string;
  bookRating: number;
  bookCategories: string[];
  bookPages: number;
}

const DialogBookCard = ({
  coverUrl,
  alt,
  bookName,
  bookAuthor,
  bookRating,
  bookCategories,
  bookPages,
}: DialogBookCard) => {
  // Função para gerar um número aleatório de avaliações para os livros.
  const getRandomNumberOfRatings = getRandomInt(1, 10000);

  // book Categories formatado com vírgulas após cada categoria.
  const formatedBookCategories = bookCategories.join(", ");

  return (
    <Card className="mt-6 bg-gray-700 py-4">
      <CardContent className="flex flex-col">
        <div className="mb-4 flex gap-6 border-b border-gray-600 pb-7">
          <Image
            src={coverUrl}
            alt={alt}
            width={108}
            height={152}
            className="rounded-md object-cover"
          />

          <div className="flex flex-col">
            <h2 className="line-clamp-2 text-sm font-bold text-gray-100">
              {bookName}
            </h2>
            <p className="text-xs text-gray-400">{bookAuthor}</p>
            <div className="mt-auto space-y-1">
              <Rate size={5} value={bookRating} />
              <p className="text-xs text-gray-400">
                {getRandomNumberOfRatings} avaliações
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-14">
          <div className="flex items-center gap-4">
            <Bookmark className="text-green-100" width={20} height={20} />
            <div className="flex flex-col">
              <p className="text-sm text-gray-300">Categoria</p>
              <p className="text-sm font-semibold text-gray-100">
                {formatedBookCategories}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BookOpenIcon className="text-green-100" width={20} height={20} />
            <div className="flex flex-col">
              <p className="text-sm text-gray-300">Páginas</p>
              <p className="text-sm font-semibold text-gray-100">{bookPages}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DialogBookCard;
