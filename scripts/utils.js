const chalk = require('chalk')

module.exports = {
  logger: {
    info: (info) => console.log(chalk.bgGreen(info)),
    warn: (warn) => console.log(chalk.yellow(warn)),
    error: (error) => console.log(chalk.red(error))
  },
  onError (err, req, res) {
    res.writeHead(500, {
      'Content-Type': 'text/plain;charset=utf-8'
    })
    const info = `
      ${err.toString()}\r\n
      cannot connect to target server.
    `
    res.end(info)
  }
}
