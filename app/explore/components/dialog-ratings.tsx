import Rate from "@/app/(home)/components/rate";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  getRandomAvatar,
  getRandomName,
} from "@/app/_utils/get-random-informations";

interface DialogRatingsProps {
  ratingValue: number;
}

const DialogRatings = ({ ratingValue }: DialogRatingsProps) => {
  return (
    <Card className="bg-gray-700">
      <CardContent>
        <CardHeader className="px-0 py-4">
          <div className="flex items-center justify-between">
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
              <Rate size={5} value={ratingValue} />
            </div>
          </div>
        </CardHeader>
      </CardContent>
    </Card>
  );
};

export default DialogRatings;
