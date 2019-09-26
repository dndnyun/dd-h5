// vue.config.js
const getPages = require('./util/getPages')

const pages = getPages.pages()
module.exports = {
  // 选项...
  publicPath: './',
  filenameHashing: false,
  devServer: {
    port: 8000
  },
  pages,
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/assets/index.scss";`
      }
    }
  }
}
