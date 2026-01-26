import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Vercel optimizations
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
