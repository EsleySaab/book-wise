import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  getRandomAvatar,
  getRandomDate,
  getRandomName,
} from "@/app/_utils/get-random-informations";
import Rate from "./rate";
import Image from "next/image";

interface RatingCardProps {
  ratingValue: number;
  bookImage: string;
  bookName: string;
  alt: string;
  authorName: string;
  bookSummary: string;
}

const RatingCard = ({
  ratingValue,
  bookImage,
  alt,
  bookName,
  authorName,
  bookSummary,
}: RatingCardProps) => {
  return (
    <Card className="mb-4 bg-gray-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={getRandomAvatar()} alt="Avatar" />
            </Avatar>
            <div className="flex flex-col">
              <p className="font-semibold">{getRandomName()}</p>
              <p className="text-sm text-gray-400">{getRandomDate()}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Rate value={ratingValue} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex gap-5">
        <Image
          src={bookImage}
          alt={alt}
          width={108}
          height={152}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <h2 className="text-md font-semibold text-gray-100">{bookName}</h2>
          <p className="mb-5 text-sm text-gray-400">{authorName}</p>

          <p className="text-gray-300">{bookSummary}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingCard;
