/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'comics-api.vercel.app',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
