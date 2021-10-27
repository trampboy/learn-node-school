/**
 * Created by JingHongGang on 2021/10/27.
 */
const split2 = require('split2')
const through2 = require('through2')
let isEven = true
process.stdin
.pipe(split2())
.pipe(through2(function (buf, _, next) {
  const line = buf.toString()
  this.push((isEven ? line.toLowerCase() : line.toUpperCase()) + '\n')
  isEven = !isEven
  next()
}))
.pipe(process.stdout)