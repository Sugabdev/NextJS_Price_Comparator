import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'c1.neweggimages.com'
      }
    ]
  },
  reactStrictMode: false,
};

export default nextConfig;
