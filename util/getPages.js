const glob = require('glob')

module.exports.pages = function () {
  let pages = {}
  glob.sync('./src/pages/*/*.js').forEach(filepath => {
    let fileList = filepath.split('/')
    let fileName = fileList[fileList.length - 2]

    console.log(fileName)

    let template = ''

    if (fileName === 'share') {
      template = 'public/share.html'
    } else {
      template = 'public/index.html'
    }

    pages[fileName] = {
      entry: `src/pages/${fileName}/main.js`,
      // 模板来源
      template: template,
      title: '登登获客',
      // 在 dist/index.html 的输出
      filename: `${fileName}.html`,
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return pages
}
