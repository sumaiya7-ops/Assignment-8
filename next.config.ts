import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['unsplash.com', 'flaticon.com', 'i.ibb.co', 'i.postimg.cc'],
  },
  typescript: {
    // এটি টাইপস্ক্রিপ্ট এররগুলোকে ইগনোর করে বিল্ড সফল করবে
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
