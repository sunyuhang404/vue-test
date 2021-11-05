
// css loader 配置

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../../',
      },
    },
    'css-loader',
  ]
};