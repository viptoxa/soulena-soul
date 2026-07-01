import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the on-screen Next.js dev indicator (the "N" badge). Dev-only anyway.
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
