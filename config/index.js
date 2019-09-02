module.exports = {
  webpackConfig: {
    port: 4000,
    hotOnly: true,
    compress: true,
    publicPath: '/',
    quiet: true,
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      '/leo': {
        target: 'https://wdocker4.dian.so',
        changeOrigin: true,
        cookieDomainRewrite: {
          '*': ''
        }
      }
    }
  }
}
