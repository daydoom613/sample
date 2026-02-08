import { MenuType } from "@/types/header";
import MenuItem from "./MenuItem";

const menu: MenuType[] = [
  { title: "Home", href: "/" },
  {
    title: "GLOBAL CINEMA CREATION",
    href: "/global-cinema-creation",
    subMenu: [
      { title: "NGC Originals", href: "/global-cinema-creation/ngc-originals" },
      { title: "Co-Productions", href: "/global-cinema-creation/ip-projects" },
      {
        title: "Partner IPs (Creative Execution)",
        href: "/global-cinema-creation/ip-partners",
      },
      {
        title: " CREATIVE COLLABORATION",
        href: "/global-cinema-creation/collaborations",
        subMenu: [
          { title: "Writers & Story Creators", href: "#" },
          { title: "Directors & Visual Creators", href: "#" },
          { title: "Music & Sound Creators", href: "#" },
        ],
      },
    ],
  },
  {
    title: "International VFX",
    href: "/international",
    subMenu: [
      { title: "Our pipeline", href: "/pipeline" },
      { title: "International VFX/CG services", href: "/services" },
      { title: "VFX/CG Outsource vendors", href: "/vendors" },
    ],
  },
  { title: "Investors & Partners", href: "/investors" },
  { title: "Media", href: "/media-annoucements" },
  { title: "IPs Distribution & OTT", href: "/ott" },
  { title: "Career", href: "/career" },
];

export default function NavBar() {
  return (
    <nav className="bg-white/60 absolute top-0 w-full flex justify-end items-center p-5 font-bold text-sm text-gray-600 gap-5 z-100">
      {menu.map((menuItem, idx) => (
        <div
          key={menuItem.title}
          className="relative group nav-item opacity-0"
          style={{ animationDelay: `${idx * 0.18}s` }}
        >
          <MenuItem item={menuItem} />
        </div>
      ))}
    </nav>
  );
}
