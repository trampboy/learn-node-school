/**
 * HTTP 大写转换器
 * Created by JingHongGang on 2021/10/24.
 */
const http = require('http')
const map = require('through2-map')
const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  }))
    .pipe(res)
})
server.listen(process.argv[2])