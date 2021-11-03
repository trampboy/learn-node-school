/**
 * Created by JingHongGang on 2021/11/3.
 */
const Stream = require('stream')
class MyWritable extends Stream.Writable {
  _write(data, _, next) {
    console.log(data)
    next()
  }
}

const myWritable = new MyWritable()

// 已全部写入底层系统，即最后一次 _write 调用，next 被执行
myWritable.on('prefinish', function () {
  console.log('prefinish')
})

// 所有 write(data, cb) 传入的 cb 已经执行完成
myWritable.on('finish', function () {
  console.log('finish')
})

myWritable.write('a', () => {
  console.log('write a')
})
myWritable.write('b', () => {
  console.log('write b')
})
myWritable.write('c', () => {
  console.log('write c')
})
myWritable.end()
