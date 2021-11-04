/**
 * Created by JingHongGang on 2021/11/3.
 */
var Stream = require('stream')

var source = ['a', 'b', 'c', 'd', 'e', 'f']

var readable = Stream.Readable({
  highWaterMark: 2,
  read: function () {
    var data = source.shift() || null
    this.push(data)
  },
})

const writable = Stream.Writable({
  highWaterMark: 2,
  write: function (data, _, next) {
    console.log('write', data)
    setTimeout(() => {
      console.log('write next')
      next()
    }, 1000)
  }
})

readable.on('data', function (data) {
  console.log('readable.data', data)
  if (!writable.write(data)) {
    console.log('readable.pause')
    readable.pause()
  }
})

writable.on('drain', function () {
  console.log('readable.resume')
  readable.resume()
})


