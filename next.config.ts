import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: "",  // Adjust to your repository name
  images: {
    unoptimized: true, // Required for Next.js Image component on GitHub Pages
  },
};

export default nextConfig;
