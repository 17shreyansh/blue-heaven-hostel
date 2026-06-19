import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Static export does not support the on-demand Image Optimization API.
    unoptimized: true,
  },
  eslint: {
    // Lint is run separately via `npm run lint`; decoupled from production
    // builds so version drift in lint tooling never blocks a deploy.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
