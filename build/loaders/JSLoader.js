
// babel-loader 配置

module.exports = {
  test: /\.js$/,
  // 对 js 文件的处理交给 id=happyBabel 的 happypack 的实例执行
  loader: 'happypack/loader?id=happyBabel',
  exclude: /node_modules/
};
