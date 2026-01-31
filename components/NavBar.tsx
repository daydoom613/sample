import Link from "next/link";

type MenuType = {
  title: string;
  href: string;
  subMenu?: MenuType[];
};

const menu: MenuType[] = [
  {
    title: "Content creation",
    href: "/content",
    subMenu: [
      {
        title: "NGC IPs",
        href: "/ips",
      },
      {
        title: "Outsider's IP projects",
        href: "/ip-projects",
      },
      {
        title: "Creative collaborations for talent",
        href: "/collaborations",
      },
    ],
  },
  {
    title: "International services",
    href: "/international",
    subMenu: [
      { title: "Our pipeline", href: "/pipeline" },
      { title: "International VFX/CG services", href: "services" },
      { title: "VFX/CG Outsource vendors", href: "vendors" },
    ],
  },
  { title: "Investors", href: "/investors" },
  { title: "Media announcements", href: "/media-annoucements" },
  { title: " IPs Distribution and OTT", href: "/ott" },
  { title: "VFX Careers & Internship", href: "/career" },
];

export default function NavBar() {
  return (
    <nav className="bg-white/60 flex justify-end items-center p-5 font-bold text-sm text-gray-600 gap-5">
      {menu.map((menuItem) => (
        <Link
          href={menuItem.href}
          key={menuItem.title}
          className="hover:text-red-500 hover:border-red-500 border-2 border-transparent px-2 py-1 rounded-md transition-all duration-300 ease-in-out hover:scale-110"
        >
          {menuItem.title.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
