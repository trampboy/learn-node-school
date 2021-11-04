/**
 * Created by JingHongGang on 2021/11/4.
 */
var Stream = require('stream')

var readable = createReadable()
var writable = createWritable()

readable.on('data', function (data) {
  var ret = writable.write(data)
  if (ret === false) {
    readable.pause()
  }
})
readable.on('end', function (data) {
  writable.end()
})

writable.on('finish', function () {
  console.log('done')
})

writable.on('drain', function () {
  readable.resume()
})

readable.pipe(writable).on('finish', function () {
  console.log('done')
})

function createWritable() {
  return Stream.Writable({
    write: function (data, _, next) {
      console.log(data)
      next()
    },
  })
}

function createReadable() {
  var source = ['a', 'b', 'c']

  return Stream.Readable({
    read: function () {
      process.nextTick(this.push.bind(this), source.shift() || null)
    },
  })
}

