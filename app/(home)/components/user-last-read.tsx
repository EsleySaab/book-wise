import { Card, CardContent } from "@/app/_components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/app/_lib/prisma";
import Rate from "./rate";

const UserLastRead = async () => {
  const lastRead = await db.book.findFirst({
    include: {
      ratings: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  if (!lastRead) {
    return "";
  }

  const rating = lastRead.ratings[0];
  const ratingValue = rating ? rating.rate : 0;
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-normal text-gray-100">Sua última leitura</p>
        <div className="flex items-center gap-3">
          <Link
            href="/explore"
            className="text-sm font-semibold leading-none text-purple-100"
          >
            Ver todas
          </Link>
          <ArrowRightIcon width={16} height={16} className="text-purple-100" />
        </div>
      </div>
      <Card className="mb-4 bg-gray-600 md:mb-2">
        <CardContent className="flex gap-6 pt-4">
          <Image
            src={lastRead.cover_url}
            alt={lastRead.name}
            width={108}
            height={152}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <div className="flex w-full justify-between pb-3">
              <p className="text-sm text-gray-300">Há 2 dias</p>
              <Rate value={ratingValue} size={5} />
            </div>
            <h2 className="text-md font-semibold text-gray-100">
              {lastRead.name}
            </h2>
            <p className="mb-5 text-sm text-gray-400">{lastRead.author}</p>
            <p className="text-sm text-gray-300">{lastRead.summary}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserLastRead;
