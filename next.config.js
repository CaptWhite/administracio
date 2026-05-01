/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
}

const nextConfig = {
  // Si existe la variable APP_BASE_PATH, la usa. Si no, usa raíz /
  basePath: process.env.APP_BASE_PATH || '',
}

module.exports = nextConfig
