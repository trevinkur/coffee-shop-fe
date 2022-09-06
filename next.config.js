/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    URL_BE: 'https://whale-app-a7nox.ondigitalocean.app/'
  }
}

module.exports = nextConfig
