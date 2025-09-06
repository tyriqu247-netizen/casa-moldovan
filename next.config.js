module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
    localeDetection: false,
  }
}/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = nextConfig
