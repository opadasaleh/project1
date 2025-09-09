import { hostname } from "os";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
