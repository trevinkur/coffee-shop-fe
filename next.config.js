/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    URL_BE: 'https://witty-jewelry-bass.cyclic.app/'
  },
  images: {
    domains: ['witty-jewelry-bass.cyclic.app']
  }
}

module.exports = nextConfig
