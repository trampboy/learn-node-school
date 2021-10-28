/**
 *  Your program will get some html written to stdin. Convert all the inner
 *  html to upper-case for elements with a class name of "loud", and pipe all
 *  the html to stdout.
 *
 * Created by JingHongGang on 2021/10/28.
 */

const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()

const loud = tr.select('.loud').createStream()
loud.pipe(through(function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}, function (done) {
  done()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)