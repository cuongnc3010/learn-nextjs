/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['log'],
    },
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
