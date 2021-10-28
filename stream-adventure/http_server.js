/**
 * In this challenge, write an http server that uses a through stream to
 * write back the request stream as upper-cased response data for POST
 * requests.
 *
 * Created by JingHongGang on 2021/10/28.
 */
const http = require('http')
const through = require('through2')

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
   req.pipe(through(function (buf,_, next) {
     this.push(buf.toString().toUpperCase())
     next()
   }, function (done) {done()})).pipe(res)
  } else {
    res.end('send me a POST\n')
  }
})
server.listen(process.argv[2])