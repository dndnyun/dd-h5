// vue.config.js
const getPages = require('./util/getPages')

const pages = getPages.pages()
module.exports = {
  // 选项...
  publicPath: './',
  devServer: {
    port: 8000
  },
  pages
}
