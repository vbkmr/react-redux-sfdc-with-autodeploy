var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd', // this is super important
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.svg/,
        loader: 'file?name=public/icons/[name].[ext]'
      }
    ]
  }
}
