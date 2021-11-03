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

const myReadable = new MyReadable({objectMode: true})

myReadable.on('end', () => {
  console.log('end')
})

// flowing 模式
myReadable.on('data', (data) => {
  console.log('data', data)
})
