import NavBar from "../_components/navbar";
import { ScrollArea } from "../_components/ui/scroll-area";
import Ratings from "./components/ratings";
import Image from "next/image";

const Home = async () => {
  return (
    <div className="grid h-screen grid-cols-[1fr_3fr_2fr]">
      <NavBar />

      <div className="ml-24 mt-16 flex flex-col overflow-y-auto">
        <div className="mb-10 flex items-center gap-3">
          <Image src="/home-2.svg" alt="Início" width={32} height={32} />
          <h2 className="text-2xl font-semibold text-gray-100">Início</h2>
        </div>
        <h4 className="mb-4 text-gray-200">Avaliações mais recentes</h4>

        <ScrollArea className="h-full">
          <Ratings />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Home;
