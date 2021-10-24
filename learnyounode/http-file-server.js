/**
 * HTTP 文件服务器
 * Created by JingHongGang on 2021/10/24.
 */
const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const filePath = process.argv[3]

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/plain'})
  fs.createReadStream(filePath).pipe(res)
})
server.listen(port)