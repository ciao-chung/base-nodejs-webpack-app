'use strict'
const path = require('path')
const config = require('../config')
const nodeExternals = require('webpack-node-externals')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  target: 'node',
  context: path.resolve(__dirname, '../'),
  externals: [nodeExternals()],
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: config.build.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'src': resolve('src'),
      'static': path.resolve(__dirname, '../static'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'libs': path.resolve(__dirname, '../src/libs'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
    ],
  },
}
