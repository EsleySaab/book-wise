"use client";

import Rate from "@/app/(home)/components/rate";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import Image from "next/image";
import DialogBookCard from "./dialog-book-card";
import DialogRatings from "./dialog-ratings";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface ExploreBookCardProps {
  coverUrl: string;
  alt: string;
  bookName: string;
  bookAuthor: string;
  bookRating: number;
  bookCategories: string[];
  bookPages: number;
  ratings: {
    id: string;
    rate: number;
    description: string;
  }[];
}

const ExploreBookDialog = ({
  coverUrl,
  alt,
  bookName,
  bookAuthor,
  bookRating,
  bookCategories,
  bookPages,
  ratings,
}: ExploreBookCardProps) => {
  const { user } = useUser();
  const router = useRouter();

  const handleReviewClick = () => {
    if (!user) {
      router.push("/login");
    } else {
      console.log("Escreva sua avaliação!");
    }
  };

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

      <DialogContent className="flex max-h-full flex-col border-none bg-gray-800 outline-none">
        <DialogHeader className="pb-4">
          <DialogBookCard
            alt={alt}
            coverUrl={coverUrl}
            bookName={bookName}
            bookAuthor={bookAuthor}
            bookRating={bookRating}
            bookCategories={bookCategories}
            bookPages={bookPages}
          />
        </DialogHeader>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-200">Avaliações</p>
          <Button
            type="button"
            className="text-sm font-semibold text-purple-100"
            onClick={handleReviewClick}
          >
            Avaliar
          </Button>
        </div>

        <ScrollArea className="h-screen">
          <div className="space-y-4">
            {ratings.map((rating) => (
              <DialogRatings
                key={rating.id}
                ratingValue={rating.rate}
                ratingDescription={rating.description}
              />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ExploreBookDialog;
