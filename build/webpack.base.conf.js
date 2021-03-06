'use strict'
const path = require('path')
const config = require('../config')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  target: 'node',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['./src/main.js']
  },
  node: {
    __dirname: true,
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: config.build.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      resolve('src'),
      'node_modules'
    ],
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
