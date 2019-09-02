const express = require('express')
const httpProxy = require('http-proxy-middleware')
const opn = require('better-opn')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const { logger } = require('./utils')

const webpackDevConfig = require('../config/webpack.config.dev')
const { webpackConfig } = require('../config')

const compiler = webpack(webpackDevConfig)

// init local server
const app = new express()

// dev middleware
app.use(webpackDevMiddleware(compiler, {
  logLevel: 'warn',
  publicPath: webpackConfig.publicPath
}))

// hot middleware
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

// proxy
Object.keys(webpackConfig.proxy).forEach((key) => {
  const config = webpackConfig.proxy[key]
  app.use(key, httpProxy({ ...config }))
})

// finish
app.listen(webpackConfig.port)

let isBrowserOpened = false

compiler.hooks.done.tap('done', async (stats) => {
  if (isBrowserOpened) return

  isBrowserOpened = true
  logger.info(`Started server on localhost:${webpackConfig.port}!`)
  opn(`http://localhost:${webpackConfig.port}`)
})
