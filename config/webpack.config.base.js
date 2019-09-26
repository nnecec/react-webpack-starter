const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const path = require('path')

const config = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index.js')
  ],

  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new HardSourceWebpackPlugin()
  ]
}

module.exports = config
