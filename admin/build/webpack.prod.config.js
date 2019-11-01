const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge') //webpack合并模块
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //单独提取css文件模块
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config') //导入基础webpack配置文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //解析/压缩/美化所有的js插件

const config = require('../config')
const utils = require('./utils')
const env = require('../config/prod.env')

var webpackConfig = merge(baseWebpackConfig, {
  // module: { //增加模块处理规则
  //   rules: utils.styleLoaders({ //对于所有的css的loader都进行初始化配置
  //     sourceMap: config.build.productionSourceMap,
  //     extract: true
  //   })
  // },
  devtool: config.build.productionSourceMap ? '#source-map' : false, //生成source map文件配置
  output: { //输出build生成的js文件
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),//生成主入口文件,如app.js
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js') //生成非主入口文件,如vender.js
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({ //解析/压缩/美化所有的js插件
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].css'),
      chunkFilename: utils.assetsPath('css/[id].css'),
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin(), //优化css
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({ //生成html文件
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([//将打包后的文件复制到指定目录
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ],
  optimization: { //抽离js中公共的部分并合并到一个文件里
    splitChunks: {
      name: 'manifest',
      // minChunks: function (module, count) {
      //   // any required modules inside node_modules are extracted to vendor
      //   return (
      //     module.resource &&
      //     /\.js$/.test(module.resource) &&
      //     module.resource.indexOf(
      //       path.join(__dirname, '../node_modules')
      //     ) === 0
      //   );
      // }
    }
  }
});

if (config.build.productionGzip) { //是否打开压缩,这是对整个打包出来的文件夹进行压缩
  var CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;