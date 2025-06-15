/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for development
  webpack: (config, { dev, isServer }) => {
    // Optimize CSS loading
    if (!isServer && dev) {
      config.optimization.moduleIds = 'deterministic';
    }
    return config;
  },
};

export default nextConfig;
