import type { MenuType } from "@/types/header";

export const NAV_MENU: MenuType[] = [
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
          {
            title: "Writers & Story Creators",
            href: "/global-cinema-creation/collaborations#writers",
          },
          {
            title: "Directors & Visual Creators",
            href: "/global-cinema-creation/collaborations#directors",
          },
          {
            title: "Music & Sound Creators",
            href: "/global-cinema-creation/collaborations#music-sound",
          },
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
  { title: "Media", href: "/media-announcements" },
  { title: "IPs Distribution & OTT", href: "/ott" },
  { title: "Career", href: "/career" },
];
