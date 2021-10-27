/**
 * Created by JingHongGang on 2021/10/27.
 */
const {Writable} = require('stream')
class MyCustomWriteable extends Writable {
  _write(chunk, encoding, next) {
    console.log('writing: ' + chunk.toString())
    next()
  }
}
const myCustomWriteable = new MyCustomWriteable()
process.stdin.pipe(myCustomWriteable)