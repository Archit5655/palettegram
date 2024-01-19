/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  reactServerComponents: {
    use: ["@react-email/tailwind"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["cloud.appwrite.io"],
  },
};

module.exports = nextConfig;
