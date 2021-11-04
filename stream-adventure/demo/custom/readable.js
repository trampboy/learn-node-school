/**
 * Created by JingHongGang on 2021/11/4.
 */
'use strict'
var Readable = require('stream').Readable

class ToReadable extends Readable {
  constructor(iterable) {
    super()
    this.iterable = iterable
  }
  _read() {
    const res = this.iterable.next()
    if (res.done) {
      this.push(null)
    } else {
      this.push(res.value + '\n')
    }
  }
}

var source = function *(limit) {
  while (limit--) {
    yield Math.random()
  }
}(1e10)

const rs = new ToReadable(source)
rs.pipe(process.stdout)

