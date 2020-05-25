module.exports = {
  webpackConfig: {},
  devConfig: {
    proxy: {
      '/': {
        target: 'http://testactivity.busi.me.inke.cn',
        changeOrigin: true
      }
    }
  }
}
