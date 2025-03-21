import Image from "next/image";
import LoginButton from "../_components/login-button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "../_components/ui/button";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-[1fr_2fr] p-5">
      {/* Esquerda */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      {/* Direita */}
      <div className="mx-auto flex w-[350px] flex-col justify-center">
        <h1 className="text-2xl font-bold">Boas vindas!</h1>
        <p className="mb-10 text-gray-300">
          Faça seu login ou acesse como visitante.
        </p>

        <div className="flex w-full flex-col space-y-4">
          <SignInButton>
            <LoginButton
              text="Entrar com o Google"
              image="/google.svg"
              alt="Logo do Google"
            />
          </SignInButton>
          <SignInButton>
            <LoginButton
              text="Entrar com o GitHub"
              image="/github.svg"
              alt="Logo do GitHub"
            />
          </SignInButton>

          <Button
            className="flex items-center justify-start gap-4 bg-gray-600 p-7 hover:bg-gray-700"
            asChild
          >
            <Link href="/">
              <Image
                src="/visitant.svg"
                alt="Logo visitante"
                width={24}
                height={24}
              />
              <p className="font-semibold text-gray-200">
                Acessar como visitante
              </p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
