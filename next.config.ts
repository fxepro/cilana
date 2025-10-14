import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/cilana' : '',
  assetPrefix: isProd ? '/cilana/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
