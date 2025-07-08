/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: '/app',
  },
  distDir: '.next',
};

export default nextConfig;
