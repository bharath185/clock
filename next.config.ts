import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
     output: 'standalone', 
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;