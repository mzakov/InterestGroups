'use strict'

const webpack = require('webpack')

const PATHS = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const devtool = 'cheap-module-eval-source-map'
//const ngAnnotatePlugin = 'ng-annotate-webpack-plugin'

const entry = {
  hot: 'webpack/hot/dev-server',
  polyfills: './static/js/core/polyfills.js',
  vendors: './static/js/core/vendors.js',
  app: './static/js/core/index.js'
}

const output = {
  path: '../src/main/resources/static',
  filename: '[name].js?[hash]'
}

const extentions = [
                    '',
                    '.js',
                    '.css',
                    '.html'
                    ]

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel'
  },
  {
    test: /\.css$/,
    loader: ExtractTextWebpackPlugin.extract('style', 'css')
  },
  {
    test: /\.html$/,
    exclude: [/node_modules/, /js/],
    include: /static/,
    loader: 'html'
  }, 
  {
	test: /\.html$/,
    exclude: /node_modules/,
    include: /js/,
    loader: [
             'ngtemplate?requireAngular',
             'html'
             ]
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file'
  },
  {
  test: /\.(woff|woff2)$/,
  loader: 'url?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.(jpg|png)$/,
    loader: 'url?limit=25000',
    include: PATHS.images
  },
  {
	test: /bootstrap.+\.(jsx|js)$/,
	loader: 'imports?jQuery=jquery,$=jquery,this=>window'
}]

const plugins = [
  new ExtractTextWebpackPlugin('[name].css'),
  new HtmlWebpackPlugin({
    inject: 'head',
    template: './static/index.html',
    chunksSortMode: 'none'
  })
//  ,
//  new ngAnnotatePlugin({
//      add: true,
//  })

]

const devServer = {
	contentBase: './static',
	stats: 'minimal'
}

module.exports = {
  devtool,
  devServer,
  entry,
  output,
  module: {
    loaders
  },
  plugins
}
