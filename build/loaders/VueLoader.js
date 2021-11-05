
// vue-loader 配置

module.exports = {
  test: /\.vue$/,
  loader: 'vue-loader',
  exclude: /node_modules/,
  options: {
    // 以下配置会导致所有无 lang 特性的 script 标签加载 coffee-loader
    loaders: {
      js: 'coffee-loader'
    },
    // preLoaders 会在默认加载 loaders 之前加载
    // 可以用来处理语言模块 (eg: i18n)
    // preLoaders: {
    //   js: 'path/to/custom/loader'
    // }
    // postLoaders 会在默认 loaders 之后加载
    postLoaders: {
      html: 'babel-loader'
    }
  }
};