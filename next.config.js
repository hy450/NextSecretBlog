/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://github.com",
      },
      {
        protocol: "https",
        hostname: "graph.facebook.com",
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/posts",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },

  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };
  //   return config;
  // },
};

module.exports = nextConfig;
