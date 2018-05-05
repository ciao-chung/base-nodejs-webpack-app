'use strict'
const path = require('path')
const config = require('../config')
const pkg = require('../package.json')
exports.assetsPath = function (_path) {
  const assetsSubDirectory = config.build.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.createNotifierCallback = function () {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') {
      return
    }
    const error = errors[0]

    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: pkg.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
