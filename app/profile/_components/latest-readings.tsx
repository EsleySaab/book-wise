import { Search, User2Icon } from "lucide-react";

const LatestReadings = () => {
  return (
    <>
      <div className="mb-10 flex items-center gap-3">
        <User2Icon width={32} height={32} className="text-green-100" />
        <h1 className="text-2xl font-bold text-gray-100">Perfil</h1>
      </div>
      <div className="relative w-full rounded-lg border border-gray-500 focus-within:border-green-200">
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
    </>
  );
};

export default LatestReadings;
