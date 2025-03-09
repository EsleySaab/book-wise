import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className="m-5 flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #163e47 0%, #1e1d5e 80%)",
      }}
    >
      <div>
        <Image
          src="/logo.svg"
          alt="Logo do BookWise"
          width={128}
          height={32}
          className="mb-10 mt-7"
        />

        <div className="space-y-4 opacity-50">
          <Link href="/" className="flex gap-3">
            <Image src="home.svg" alt="Início" width={24} height={24} />
            Início
          </Link>

          <Link href="/" className="flex gap-3">
            <Image src="home.svg" alt="Início" width={24} height={24} />
            Explorar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
