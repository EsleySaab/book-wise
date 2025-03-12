import { Card, CardContent } from "@/app/_components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/app/_lib/prisma";

const UserLastRead = async () => {
  const lastRead = await db.book.findFirst({
    orderBy: {
      id: "asc",
    },
  });

  if (!lastRead) {
    return "";
  }
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
      <Card className="bg-gray-600">
        <CardContent className="flex gap-6 pt-4">
          <Image
            src={lastRead?.cover_url}
            alt={`Capa do livro ${lastRead?.name}`}
            width={108}
            height={152}
            className="rounded-lg"
          />
          <div className="flex justify-between">
            <p className="text-sm text-gray-300">Há 2 dias</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserLastRead;
