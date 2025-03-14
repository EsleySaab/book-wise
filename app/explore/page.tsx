import NavBar from "../_components/navbar";
import ExploreHeader from "./components/explore-header";

const ExplorePage = () => {
  return (
    <div className="mr-24 grid h-full grid-cols-[1fr_5fr]">
      <NavBar />

      <div className="ml-24 mt-16">
        <ExploreHeader />
      </div>
    </div>
  );
};

export default ExplorePage;
