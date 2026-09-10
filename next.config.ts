import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/*
 * Turbopack finds the project root by looking for a lockfile, and there is a
 * stray /Users/anton/package-lock.json from 2023 sitting above this directory.
 * When it picks that one, the root becomes the home folder, nothing under
 * src/app resolves any more and every route — "/" included — answers 404,
 * while `next build` still succeeds. Pinning the root ends the ambiguity.
 */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: { root: projectRoot },
  // Hide the on-screen Next.js dev indicator (the "N" badge). Dev-only anyway.
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
