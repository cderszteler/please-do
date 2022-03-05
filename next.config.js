const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')

const plugins = [

]

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
}

module.exports = withPlugins(
  plugins,
  nextConfig
)