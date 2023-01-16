/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ygoprodeck.com',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig