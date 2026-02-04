import Link from "next/link";
import NavLink from "./NavLink";

type MenuType = {
  title: string;
  href: string;
  subMenu?: MenuType[];
};

const menu: MenuType[] = [
  { title: "Home", href: "/" },
  {
    title: "Global Cinema Creation",
    href: "/creation",
    subMenu: [
      { title: "NGC IPs", href: "/ips" },
      { title: "Outsider's IP projects", href: "/ip-projects" },
      { title: "Creative collaborations for talent", href: "/collaborations" },
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
    <nav className="bg-white/60 absolute top-0 w-full flex justify-end items-center p-8 font-bold text-sm text-gray-600 gap-5">
      {menu.map((menuItem, idx) => (
        <div
          key={menuItem.title}
          className="relative group nav-item opacity-0"
          style={{ animationDelay: `${idx * 0.18}s` }}
        >
          <NavLink menuItem={menuItem} key={menuItem.title} />

          {menuItem.subMenu && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="flex flex-col py-2">
                {menuItem.subMenu.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.href}
                    className="px-4 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-500 transition"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
