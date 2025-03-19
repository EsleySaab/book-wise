import Rate from "@/app/(home)/components/rate";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  getRandomAvatar,
  getRandomDate,
  getRandomName,
} from "@/app/_utils/get-random-informations";
import { useUser } from "@clerk/nextjs";

interface DialogRatingsProps {
  ratingValue: number;
  ratingDescription: string;
  userId: string;
}

const DialogRatings = ({
  ratingValue,
  ratingDescription,
  userId,
}: DialogRatingsProps) => {
  const { user } = useUser();

  const isUserReal = userId === user?.id;

  const avatarUrl =
    isUserReal && user?.imageUrl ? user.imageUrl : getRandomAvatar();

  return (
    <Card className="bg-gray-700">
      <CardContent>
        <CardHeader className="px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src={avatarUrl} alt="Avatar" />
              </Avatar>
              <div className="flex flex-col">
                {isUserReal ? (
                  <p className="font-semibold">{user?.fullName || "Usuário"}</p>
                ) : (
                  <p className="font-semibold">{getRandomName()}</p>
                )}
                <p className="text-sm text-gray-400">{getRandomDate()}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Rate size={5} value={ratingValue} />
            </div>
          </div>
        </CardHeader>
        <p className="text-sm text-gray-300">{ratingDescription}</p>
      </CardContent>
    </Card>
  );
};

export default DialogRatings;
