/**
 * Created by JingHongGang on 2021/10/21.
 */
const fs = require('fs')
fs.readFile(process.argv[2], ((err, data) => {
  if (err) {
    return
  }
  const lines = data.toString().split('\n').length - 1
  console.log(lines)
}))