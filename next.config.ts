import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-markup' : '',
  cleanDistDir: true,
  compiler: {
    reactRemoveProperties: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.it',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig;
