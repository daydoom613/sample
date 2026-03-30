import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/media-annoucements",
        destination: "/media-announcements",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
