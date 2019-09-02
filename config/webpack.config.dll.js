const { resolve } = require('path')
const webpack = require('webpack')
const dependencies = require('../package.json').dependencies

module.exports = {
  mode: process.env.API_ENV === 'production' ? 'production' : 'development',

  entry: {
    vendor: dependencies
  },

  output: {
    path: resolve(__dirname, '../public/dll'),
    filename: '[name].js',
    library: '[name]'
  },

  plugins: [
    new webpack.DllPlugin({
      path: resolve(__dirname, '../public/dll/[name]-manifest.json'),
      name: '[name]'
    })
  ]
}
