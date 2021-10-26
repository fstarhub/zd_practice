const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    // 本地ip地址
    host: '172.20.10.2',
    port: 8080,
    disableHostCheck: true,
    /* 使用代理 */
    proxy: {
      '/': {
        /* 目标代理服务器地址 */
        target: 'http://localhost:8000',
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  }
}
