/**
 * Created by JingHongGang on 2021/10/21.
 */
const fs = require('fs')
const path = require('path')
module.exports = function (dir, ext, callback) {
  fs.readdir(dir, ((err, files) => {
    if (err) {
      return callback(err)
    }
    const filterFiles = files.filter(file => {
      if (!ext) {
        return true
      }
      return path.extname(file) === ext
    })
    callback(null, filterFiles)
  }))
}