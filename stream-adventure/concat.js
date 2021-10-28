/**
 * Created by JingHongGang on 2021/10/28.
 */
const concat = require('concat-stream')
process.stdin.pipe(concat(function (buffer) {
  const newLine = buffer.toString().split('').reverse().join('')
  process.stdout.write(newLine)
}))