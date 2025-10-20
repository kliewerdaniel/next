import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true, // MANDATORY per docs/ai_guidelines.md Section 2.1
  reactStrictMode: true,
};

export default nextConfig;
