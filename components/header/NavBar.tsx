import { MenuType } from "@/types/header";
import MenuItem from "./MenuItem";
import Link from "next/link";
import Image from "next/image";

const menu: MenuType[] = [
  { title: "Home", href: "/" },
  {
    title: "GLOBAL CINEMA CREATION",
    href: "/global-cinema-creation",
    subMenu: [
      { title: "NGC Originals", href: "/global-cinema-creation/ngc-originals" },
      {
        title: "Partner IPs (Creative Execution)",
        href: "/global-cinema-creation/ip-partners",
      },
      {
        title: "Creative Collaboration",
        href: "/global-cinema-creation/collaborations",
        subMenu: [
          { title: "Writers & Story Creators", href: "#" },
          { title: "Directors & Visual Creators", href: "#" },
          { title: "Music & Sound Creators", href: "#" },
        ],
      },
      {
        title: "The Science of Storytelling",
        href: "/global-cinema-creation/the-science-of-storytelling",
      },
    ],
  },
  {
    title: "VFX SERVICES",
    href: "/international",
    subMenu: [
      { title: "NGC Technology & VFX Pipeline", href: "/pipeline" },
      { title: "International VFX/CG services", href: "/services" },
    ],
  },
  { title: "Investors & Partners", href: "/investors" },
  { title: "Media", href: "/media-annoucements" },
  { title: "IPs Distribution & OTT", href: "/ott" },
  { title: "Career", href: "/career" },
];

export default function NavBar() {
  return (
    <nav className="bg-white/75 backdrop-blur-md w-full flex items-center justify-between px-5 py-4 font-bold text-sm text-gray-600 gap-5">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/Logo (2).png"
          alt="NGC"
          width={44}
          height={44}
          priority
        />
        <div className="leading-tight">
          <div className="text-base font-extrabold tracking-tight text-gray-900">
            NGC
          </div>
          <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-600">
            The Science of Storytelling
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-5">
        {menu.map((menuItem, idx) => (
          <div
            key={menuItem.title}
            className="relative group nav-item opacity-0"
            style={{ animationDelay: `${idx * 0.18}s` }}
          >
            <MenuItem item={menuItem} />
          </div>
        ))}
      </div>
    </nav>
  );
}
