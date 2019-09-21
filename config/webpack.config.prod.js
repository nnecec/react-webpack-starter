const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.config.base')
// const TerserPlugin = require('terser-webpack-plugin')

const isProdEnv = process.env.API_ENV === 'production'
const suffix = isProdEnv
  ? `warehouse/${process.env.VERSION}/`
  : `warehouse-dev/${process.env.DEV_VERSION}/`

const config = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: `//assets.my.site/${suffix}`
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(baseConfig, config)
