/**
 * Created by JingHongGang on 2021/11/1.
 */
var Stream = require('stream')

var source = ['a', 'b', 'c', 'd']

var readable = Stream.Readable({
  read: function () {
    var data = source.shift() || null
    console.log('buffer before push', this._readableState.buffer)
    console.log('push', data)
    this.push(data)
    console.log('buffer after push', this._readableState.buffer)
    console.log('--------------')
  },
})

readable.on('data', function (data) {
  console.log('consume', data)
})