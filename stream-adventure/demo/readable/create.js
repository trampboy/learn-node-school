/**
 * Created by JingHongGang on 2021/11/2.
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

// flowing 模式
myReadable.on('data', (data) => {
  console.log('data', data)
})
