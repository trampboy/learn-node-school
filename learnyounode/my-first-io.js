/**
 * Created by JingHongGang on 2021/10/21.
 */
const fs = require('fs')
const content = fs.readFileSync(process.argv[2])
const lines = content.toString().split('\n').length - 1
console.log(lines)