/**
 * Created by JingHongGang on 2021/11/3.
 */
const Stream = require('stream')
class MyReadable extends Stream.Readable {
  source = ['a', 'b', 'c']
  _read() {
    this.push(this.source.shift() || null)
  }
}

const myReadable = new MyReadable()

myReadable.on('end', () => {
  console.log('end')
})

myReadable.on('readable', function () {
  let data
  // 一次性全部读取缓存
  while (data = this.read()) {
    console.log(data)
  }
})