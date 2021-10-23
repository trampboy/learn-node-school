/**
 * Created by JingHongGang on 2021/10/21.
 */
const dir = process.argv[2]
const ext = '.' + process.argv[3]
const filteredLsModule = require('./filtered-ls-module')
filteredLsModule(dir, ext, (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    console.log(file)
  })
})