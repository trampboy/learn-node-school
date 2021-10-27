/**
 * Created by JingHongGang on 2021/10/27.
 */
const {Readable} = require('stream')
class MyStream extends Readable {
  _read(size) {}
}
const myStream = new MyStream()
myStream.push(process.argv[2])
myStream.pipe(process.stdout)