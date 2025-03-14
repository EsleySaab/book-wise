import Image from "next/image";
import ActiveLink from "./active-links";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { LogInIcon } from "lucide-react";

const NavBar = () => {
  const { userId } = auth();
  return (
    <nav
      className="m-5 flex w-full flex-col items-center rounded-lg"
      style={{
        background: "linear-gradient(180deg, #163e47 0%, #1e1d5e 80%)",
      }}
    >
      <div className="flex h-full flex-col">
        <Image
          src="/logo.svg"
          alt="Logo do BookWise"
          width={128}
          height={32}
          className="mb-10 mt-7"
        />

        <div className="space-y-4">
          <ActiveLink href="/" icon="/home.svg" alt="Início">
            Início
          </ActiveLink>

          <ActiveLink href="/explore" icon="/binoculars.svg" alt="Explorar">
            Explorar
          </ActiveLink>

          <ActiveLink href="/profile" icon="/profile.svg" alt="Perfil">
            Perfil
          </ActiveLink>
        </div>
      </div>
      <div className="mb-6 px-4">
        {userId ? (
          <div className="">
            <UserButton showName />
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-3 font-bold text-gray-200"
          >
            Fazer login
            <LogInIcon className="h-5 w-5 text-green-100" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
