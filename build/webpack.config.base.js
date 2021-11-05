
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 代码压缩
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 多进程打包
const TerserPlugin = require('terser-webpack-plugin');
const HappyPack = require('happypack');

// 图片压缩
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;

// 编译进度
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// 优化编译信息
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// 查看编译时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const VueLoader = require('./loaders/VueLoader');
const CSSLoader = require('./loaders/CSSLoader');
const LESSLoader = require('./loaders/LESSLoader');
const FileLoader = require('./loaders/FileLoader');
const JSLoader = require('./loaders/JSLoader');
const UrlLoader = require('./loaders/UrlLoader');

module.exports = smp.wrap({
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]_[hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@util': path.resolve(__dirname, '../src/util/'),
      '@image': path.resolve(__dirname, '../src/assets/img/'),
      '@mixin': path.resolve(__dirname, '../src/mixins/'),
      '@page': path.resolve(__dirname, '../src/page/'),
      '@component': path.resolve(__dirname, '../src/components/'),
      '@router': path.resolve(__dirname, '../src/router/'),
      '@store': path.resolve(__dirname, '../src/store/')
    }
  },
  module: {
    rules: [
      JSLoader,
      VueLoader,
      CSSLoader,
      LESSLoader,
      FileLoader,
      ...UrlLoader
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '95-100'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash].css',
      chunkFilename: 'css/[id][contenthash].css'
    }),
    new VueLoaderPlugin(),
    new HappyPack({
      id: 'happyBabel',
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true'
      }],
      // 共享进程池
      threadPool: happyThreadPool,
      // 允许输出日志
      verbose: true
    }),
    // 去除 scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue-test',
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      chunks: ['styles', 'vendor', 'index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      })
    ],
    splitChunks: {
      // chunks: 'sync',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        // vue: {
        //   name: 'vue',
        //   test: /(vue|vue-router|vuex)/,
        //   chunks: 'all'
        // },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        }
      },
    }
  }
});