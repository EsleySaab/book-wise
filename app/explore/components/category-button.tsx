import { Button } from "@/app/_components/ui/button";

interface CategoryButtonProps {
  name: string;
}

const CategoryButton = async ({ name }: CategoryButtonProps) => {
  return (
    <>
      <Button className="rounded-full border border-purple-100">
        <p className="text-purple-100">{name}</p>
      </Button>
    </>
  );
};

export default CategoryButton;
