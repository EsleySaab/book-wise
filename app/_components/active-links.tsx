"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface ActiveLinkProps {
  href: string;
  icon: string;
  alt: string;
  children: React.ReactNode;
}

const ActiveLink = ({ href, icon, alt, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 text-gray-400 transition-colors ${
        isActive ? "border-l-4 border-white text-sm font-bold text-white" : ""
      }`}
    >
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className={`${!isActive ? "opacity-50" : ""}`}
      />
      {children}
    </Link>
  );
};

export default ActiveLink;
