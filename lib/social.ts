export type SocialLinkResolved = {
  label: string;
  href: string;
  external: boolean;
};

/**
 * Optional NEXT_PUBLIC_* URLs. When unset, links go to /contact (internal).
 */
export function getSocialLinks(): SocialLinkResolved[] {
  return [
    {
      label: "LinkedIn",
      ...resolve(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    },
    {
      label: "Instagram",
      ...resolve(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    },
    {
      label: "Vimeo",
      ...resolve(process.env.NEXT_PUBLIC_VIMEO_URL),
    },
    {
      label: "ArtStation",
      ...resolve(process.env.NEXT_PUBLIC_ARTSTATION_URL),
    },
  ];
}

function resolve(env: string | undefined): { href: string; external: boolean } {
  if (env?.startsWith("http")) return { href: env, external: true };
  return { href: "/contact", external: false };
}
