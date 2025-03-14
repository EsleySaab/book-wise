import { db } from "@/app/_lib/prisma";
import { Search } from "lucide-react";
import Image from "next/image";
import CategoryButton from "./category-button";

const ExploreHeader = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="flex flex-col space-y-12">
      <div className="mb- flex items-center justify-between text-center">
        <div className="flex items-center gap-3">
          <Image
            src="/binoculars-explore.svg"
            alt="Explorar"
            width={33}
            height={32}
          />
          <h2 className="text-2xl font-bold text-gray-100">Explorar</h2>
        </div>
        <div className="relative w-full max-w-md rounded-lg border border-gray-500">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className="w-full rounded-lg bg-gray-800 px-5 py-3 outline-none"
          />

          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <CategoryButton name={category.name} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default ExploreHeader;
