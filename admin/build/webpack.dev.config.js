const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')

const devWebpackConfig = merge(baseWebpackConfig, {
  devServer: {
    host: config.dev.host,
    port: config.dev.port,
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    proxy: config.dev.proxy
  }
})

module.exports = devWebpackConfig