const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const { webpackConfig } = require('./index')

const config = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: webpackConfig.devServer
}

module.exports = merge(baseConfig, config)
