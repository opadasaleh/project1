import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
  experimental: {
    serverActions: {}, // Use an object, not true/false
  },
};

export default nextConfig;
