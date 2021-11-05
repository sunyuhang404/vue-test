
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');
// 开启缓存
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  // stats: 'errors-only'
  plugins: [
    new HardSourceWebpackPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {},
        mangle: true,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_fnames: false
      },
      parallel: true
    })
  ]
});
