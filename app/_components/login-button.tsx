import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

interface LoginButtonProps {
  image: string;
  alt: string;
  text: string;
}

const LoginButton = ({ text, image, alt }: LoginButtonProps) => {
  return (
    <Button className="flex items-center justify-start gap-4 bg-gray-600 p-7 hover:bg-gray-700">
      <Image src={image} alt={alt} width={24} height={24} />
      <p className="font-semibold text-gray-200">{text}</p>
    </Button>
  );
};

export default LoginButton;
