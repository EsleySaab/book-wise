"use client";

import Rate from "@/app/(home)/components/rate";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import Image from "next/image";
import DialogBookCard from "./dialog-book-card";
import DialogRatings from "./dialog-ratings";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { useState } from "react";
import { createRating } from "@/app/_actions/create-rating";

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
  bookId: string;
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
  bookId,
}: ExploreBookCardProps) => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleReviewClick = () => {
    if (!user) {
      setIsOpen(true);
    } else {
      setIsReviewing(true);
    }
  };

  const handleSubmitReview = async () => {
    if (!rating || !description.trim()) return;

    try {
      await createRating({
        book_id: bookId,
        rating,
        description,
      });

      setRating(0);
      setDescription("");
      setIsReviewing(false);
    } catch (error) {
      console.error(error);
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

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="right-1/2 translate-x-1/2 translate-y-[100%] border-none bg-gray-700 px-10">
              <DialogHeader className="mb-5 mt-6">
                <DialogTitle className="text-center text-sm font-semibold text-gray-100">
                  Faça login para deixar sua avaliação
                </DialogTitle>
              </DialogHeader>
              <SignInButton>
                <Button className="flex items-center justify-start gap-4 bg-gray-600 p-7 hover:bg-gray-700">
                  <Image
                    src="/google.svg"
                    alt="Logo do Google"
                    width={24}
                    height={24}
                  />
                  Entrar com o Google
                </Button>
              </SignInButton>

              <SignInButton>
                <Button className="flex items-center justify-start gap-4 bg-gray-600 p-7 hover:bg-gray-700">
                  <Image
                    src="/github.svg"
                    alt="Logo do Github"
                    width={24}
                    height={24}
                  />
                  Entrar com o GitHub
                </Button>
              </SignInButton>
            </DialogContent>
          </Dialog>
        </div>

        {isReviewing && (
          <Card className="mt-4 border border-gray-700 bg-gray-700 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-100">
                Sua avaliação
              </p>
              <Rate size={5} value={rating} onChange={setRating} />
            </div>
            <textarea
              className="mt-2 w-full rounded-md border border-gray-600 bg-gray-800 p-2 text-sm text-gray-200"
              placeholder="Escreva sua avaliação..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="mt-2 flex justify-end gap-2">
              <Button
                type="button"
                className="text-sm font-semibold text-gray-400"
                onClick={() => setIsReviewing(false)}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                className="text-sm font-semibold text-purple-100"
                onClick={handleSubmitReview}
              >
                Enviar
              </Button>
            </div>
          </Card>
        )}

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
