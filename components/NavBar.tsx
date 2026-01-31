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
      { title: "NGC IPs", href: "/ips" },
      { title: "Outsider's IP projects", href: "/ip-projects" },
      { title: "Creative collaborations for talent", href: "/collaborations" },
    ],
  },
  {
    title: "International services",
    href: "/international",
    subMenu: [
      { title: "Our pipeline", href: "/pipeline" },
      { title: "International VFX/CG services", href: "/services" },
      { title: "VFX/CG Outsource vendors", href: "/vendors" },
    ],
  },
  { title: "Investors", href: "/investors" },
  { title: "Media announcements", href: "/media-annoucements" },
  { title: "IPs Distribution and OTT", href: "/ott" },
  { title: "VFX Careers & Internship", href: "/career" },
];

export default function NavBar() {
  return (
    <nav className="bg-white/60 flex justify-end items-center p-5 font-bold text-sm text-gray-600 gap-5">
      {menu.map((menuItem) => (
        <div key={menuItem.title} className="relative group">
          <Link
            href={menuItem.href}
            className="hover:text-red-500 hover:border-red-500 border-2 border-transparent px-2 py-1 rounded-md transition-all duration-300 ease-in-out hover:scale-110 inline-block"
          >
            {menuItem.title.toUpperCase()}
          </Link>

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
