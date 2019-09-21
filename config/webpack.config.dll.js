const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: process.env.API_ENV === 'production' ? 'production' : 'development',

  entry: {
    vendor: [
      'react',
      'react-dom'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../public/dll'),
    filename: '[name].dll.js',
    library: '_dll_[name]_[hash]'
  },

  plugins: [
    new webpack.DllPlugin({
      context: process.cwd(),
      path: path.resolve(__dirname, '../public/dll/[name]-manifest.json'),
      name: '_dll_[name]_[hash]'
    })
  ]
}
