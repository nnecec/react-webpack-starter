const opn = require('better-opn')
const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../config/webpack.config.dev')

const log = info => console.log(chalk.bgGreen(info))
const compiler = webpack(webpackConfig)

const devServer = new WebpackDevServer(compiler, webpackConfig.devServer)

const { port, host } = webpackConfig.devServer
let isBrowserOpened = false

devServer.listen(port, host, (err) => {
  if (err) return console.log(err)
})

compiler.hooks.done.tap('done', async (stats) => {
  if (isBrowserOpened) return

  isBrowserOpened = true
  log(`Compiled successfully! Started server on localhost:${port}!`)
  opn(`http://localhost:${port}`)
})
