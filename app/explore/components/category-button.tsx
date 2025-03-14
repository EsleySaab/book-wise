import { Button } from "@/app/_components/ui/button";

interface CategoryButtonProps {
  name: string;
}

const CategoryButton = async ({ name }: CategoryButtonProps) => {
  return (
    <>
      <Button className="rounded-full border border-purple-100 hover:border-purple-100 hover:bg-purple-200">
        <p className="text-purple-100 hover:text-gray-100">{name}</p>
      </Button>
    </>
  );
};

export default CategoryButton;
