const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')

const plugins = [

]

const nextConfig = {
  reactStrictMode: true
}

module.exports = withPlugins(
  plugins,
  nextConfig
)