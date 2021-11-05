
// file-loader 配置

module.exports = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        limit: 5000,
        name: 'imgs/[name][hash:8].[ext]'
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
        publicPath: '../../'
      }
    }
  ]
};
