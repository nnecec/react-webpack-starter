module.exports = {
  webpackConfig: {
    devServer: {
      port: 4000,
      hotOnly: true,
      compress: true,
      publicPath: '/',
      quiet: true,
      disableHostCheck: true,
      historyApiFallback: true,
      proxy: {
        '/leo': {
          target: 'https://wdev.dian.so',
          changeOrigin: true,
          cookieDomainRewrite: {
            '*': ''
          }
        }
      }
    }
  }
}
