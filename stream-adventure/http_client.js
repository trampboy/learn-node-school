/**
 *  Send an HTTP POST request to (http://localhost:8099) and pipe
 *  process.stdin into it. Pipe the response stream to process.stdout.
 *
 *  非常好的代理案例
 * Created by JingHongGang on 2021/10/28.
 */
const {request} = require('http')
const req = request('http://localhost:8099', {
  method: 'POST',
}, function (res) {
  res.pipe(process.stdout)
})
process.stdin.pipe(req)
