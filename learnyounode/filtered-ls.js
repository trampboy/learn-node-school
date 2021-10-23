/**
 * Created by JingHongGang on 2021/10/21.
 */
const fs = require('fs')
const path = require('path')
const dir = process.argv[2]
const ext = '.' + process.argv[3]
fs.readdir(dir, ((err, files) => {
  if (err) {
    return console.log(err)
  }
  if (!ext) {
    files.forEach(file => {
      console.log(file)
    })
  }
  const filterFiles = files.filter(file => {
    return path.extname(file) === ext
  })
  filterFiles.forEach(file => {
    return console.log(file)
  })
}))