import { getRandomInt } from "@/app/_utils/get-random-informations";
import { Book, Bookmark, BookOpenIcon, UserPlusIcon } from "lucide-react";

const UserInformations = () => {
  const randomNumberOfPages = getRandomInt(1, 10000);

  return (
    <>
      <div className="flex items-center gap-3">
        <BookOpenIcon width={32} height={32} className="text-green-100" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-100">
            {randomNumberOfPages}
          </p>
          <p className="text-sm text-gray-400">Páginas lidas</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Book width={32} height={32} className="text-green-100" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-100">
            {randomNumberOfPages}
          </p>
          <p className="text-sm text-gray-400">Livros avaliados</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <UserPlusIcon width={32} height={32} className="text-green-100" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-100">
            {randomNumberOfPages}
          </p>
          <p className="text-sm text-gray-400">Autores lidos</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Bookmark width={32} height={32} className="text-green-100" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-100">Computação</p>
          <p className="text-sm text-gray-400">Categoria mais lida</p>
        </div>
      </div>
    </>
  );
};

export default UserInformations;
