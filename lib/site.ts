/**
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://naturegurucreations.com).
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url?.startsWith("http")) return url.replace(/\/$/, "");
  return "http://localhost:3000";
}
