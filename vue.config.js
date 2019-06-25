module.exports = {
  devServer: {
    open: 'true',
    proxy: {
      '/api': {
        target: 'http://www.xiongmaoyouxuan.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}