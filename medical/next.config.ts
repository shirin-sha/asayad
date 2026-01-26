import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Vercel optimizations
  reactStrictMode: true,
  // swcMinify is enabled by default in Next.js 15, no need to specify
};

export default nextConfig;
