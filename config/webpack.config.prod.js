const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.config.base')
// const TerserPlugin = require('terser-webpack-plugin')

const config = {
  mode: 'production',
  devtool: 'source-map',

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(baseConfig, config)
