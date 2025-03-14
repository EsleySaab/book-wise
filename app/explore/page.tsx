import NavBar from "../_components/navbar";
import { ScrollArea } from "../_components/ui/scroll-area";
import ExploreBooks from "./components/explore-books";
import ExploreHeader from "./components/explore-header";

const ExplorePage = () => {
  return (
    <div className="mr-24 grid h-full grid-cols-[1fr_5fr]">
      <NavBar />

      <ScrollArea>
        <div className="mb-5 ml-24 mt-16">
          <ExploreHeader />
          <ExploreBooks />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ExplorePage;
