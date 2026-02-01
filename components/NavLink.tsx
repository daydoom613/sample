"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  menuItem,
}: {
  menuItem: { href: string; title: string };
}) {
  const pathName = usePathname();
  const isActive = pathName === menuItem.href;
  return (
    <Link
      href={menuItem.href}
      className={`hover:text-red-500 hover:border-red-500 ${
        isActive ? "text-red-500" : ""
      } border-2 border-transparent px-2 py-1 rounded-md transition-all duration-300 ease-in-out hover:scale-110`}
    >
      {menuItem.title.toUpperCase()}
    </Link>
  );
}
