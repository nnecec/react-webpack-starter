const path = require('path')
const webpack = require('webpack')
const prodConfig = require('../config/webpack.config.prod')

webpack(prodConfig, function (err, stats) {
  if (err) throw err

  if (stats.hasErrors()) {
    process.exit(1)
  }
})
