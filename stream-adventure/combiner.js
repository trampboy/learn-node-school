/**
 * Create a module in a new file named combiner.js, it
 * should return a readable/writable stream using the
 * stream-combiner module.
 *
 * Created by JingHongGang on 2021/10/30.
 */
const combiner = require('stream-combiner')
const split2 = require('split2')
const through = require('through2').obj
const zlib = require('zlib')
let current = null
module.exports = function () {
  return combiner(
    split2(),
    through(function (row, _, next) {
      const data = JSON.parse(row)
      if (data.type === 'genre') {
        if (current) {
          this.push(JSON.stringify(current) + '\n')
        }
        current = {
          name: data.name,
          books: []
        }

      } else if (data.type === 'book'){
        current.books.push(data.name)
      }
      next()
    }, function (done) {
      if (current) {
        this.push(JSON.stringify(current) + '\n')
      }
      done()
    }),
    zlib.createGzip()
  )
}