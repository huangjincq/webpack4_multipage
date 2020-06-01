module.exports = {
  webpackConfig: {},
  devConfig: {
    proxy: {
      '/user/*': {
        target: 'http://testboss.me.inke.cn',
        changeOrigin: true
      },
      '/': {
        target: 'http://testactivity.busi.me.inke.cn',
        changeOrigin: true
      }
    }
  }
}
