/**
 * Created by JingHongGang on 2021/11/4.
 */
'use strict'
var Writable = require('stream').Writable

class PrintUpperCase extends Writable {
  constructor() {
    super()
  }
  _write(buf, enc, next) {
    process.stdout.write(buf.toString().toUpperCase())
    process.nextTick(next)
  }
}

process.stdin.pipe(new PrintUpperCase())

