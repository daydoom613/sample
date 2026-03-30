import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths = [
  "/",
  "/global-cinema-creation",
  "/global-cinema-creation/ngc-originals",
  "/global-cinema-creation/ip-partners",
  "/global-cinema-creation/collaborations",
  "/global-cinema-creation/the-science-of-storytelling",
  "/international",
  "/services",
  "/pipeline",
  "/investors",
  "/media-announcements",
  "/ott",
  "/career",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
