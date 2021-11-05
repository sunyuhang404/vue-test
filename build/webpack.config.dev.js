
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // stats: 'errors-only',
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    // port: '8080',
    contentBase: path.resolve(__dirname + '../dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});
