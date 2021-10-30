/**
 * In this example, you will be given a readable stream, counter, as the
 * first argument to your exported function:
 *
 * Created by JingHongGang on 2021/10/28.
 */
const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function (counter) {
  const counts = {}
  const input = through(write, end)
  return duplexer({ objectMode: true }, input, counter)

  function write (row, _, next) {
    console.log('write', 'row', row)
    counts[row.country] = (counts[row.country] || 0) + 1
    next()
  }
  function end (done) {
    console.log('end', done)
    counter.setCounts(counts)
    done()
  }
}