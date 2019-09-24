const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const { webpackConfig } = require('./index')
const path = require('path')

const config = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  output: {
    publicPath: '/'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: webpackConfig.devServer
}

module.exports = merge(baseConfig, config)
