import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['unsplash.com', 'flaticon.com', 'i.ibb.co', 'i.postimg.cc'],
  },
  typescript: {
     ignoreBuildErrors: true,
  },
};

export default nextConfig;
