/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Disable static generation completely
  output: "standalone",
  trailingSlash: false,
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
};

module.exports = nextConfig;
