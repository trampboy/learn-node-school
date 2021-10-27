/**
 * Created by JingHongGang on 2021/10/27.
 */
const through = require('through2')
const stream = through(function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}, function (done) {
  done()
})
process.stdin.pipe(stream).pipe(process.stdout)