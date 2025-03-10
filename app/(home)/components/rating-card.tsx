import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  getRandomAvatar,
  getRandomName,
} from "@/app/_utils/get-random-informations";
import Rate from "./rate";

interface RatingCardProps {
  ratingValue: number;
}

const RatingCard = ({ ratingValue }: RatingCardProps) => {
  return (
    <Card className="mb-4 bg-gray-700">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={getRandomAvatar()} alt="Avatar" />
            </Avatar>
            <div className="flex flex-col">
              <p className="font-semibold">{getRandomName()}</p>
              <p className="text-sm text-gray-400">Hoje</p>
            </div>
          </div>
          <div className="flex items-center">
            <Rate value={ratingValue} />
          </div>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default RatingCard;
