"use client";

import Rate from "@/app/(home)/components/rate";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { getRandomInt } from "@/app/_utils/get-random-informations";
import Image from "next/image";

interface ExploreBookCardProps {
  coverUrl: string;
  alt: string;
  bookName: string;
  bookAuthor: string;
  bookRating: number;
}

const ExploreBookCard = ({
  coverUrl,
  alt,
  bookName,
  bookAuthor,
  bookRating,
}: ExploreBookCardProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="cursor-pointer rounded-lg border border-gray-700 bg-gray-700 pt-4 transition-colors duration-300 ease-in-out hover:border-purple-100 hover:bg-gray-600">
          <CardContent className="flex gap-4">
            <Image
              src={coverUrl}
              alt={alt}
              width={108}
              height={152}
              className="rounded-md object-cover"
            />

            <div className="flex flex-col text-left">
              <h2 className="line-clamp-2 text-sm font-bold text-gray-100">
                {bookName}
              </h2>
              <p className="text-xs text-gray-400">{bookAuthor}</p>
              <div className="mt-auto">
                <Rate size={5} value={bookRating} />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="border-none bg-gray-800 outline-none">
        <DialogHeader>
          <Card className="mt-6 bg-gray-700 py-4">
            <CardContent className="flex gap-4">
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
                  <p className="text-sm text-gray-400">
                    {getRandomInt(1, 10000)} avaliações
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExploreBookCard;
