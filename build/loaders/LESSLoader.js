
// less loader 配置

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =  {
  test: /\.less$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../../',
      },
    },
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          require('autoprefixer')({
            // 指定需要兼容的浏览器的版本 兼容浏览器最近的2个版本
            // 使用人数超过1%和指定的浏览器版本
            // browsers: ['last 2 version', '>1%', 'ios 7']
            overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
          })
        ]
      }
    },
    {
      loader: 'px2rem-loader',
      options: {
        exclude: /node_modules/,
        // 相对于px的转换单位 1rem = 75px
        remUnit: 75,
        // px转换成rem 小数点的位数
        remPrecesion: 8,
      }
    },
    'less-loader'
  ]
}