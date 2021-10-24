/**
 * HTTP JSON API 服务器
 * Created by JingHongGang on 2021/10/24.
 */
const http = require('http')
const server = http.createServer((req, res) => {
  const url = req.url
  const urlObj = new URL(url, 'http://example.com')
  const iso = urlObj.searchParams.get('iso')
  const date = new Date(iso)
  let result
  if (urlObj.pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }
  } else if (urlObj.pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime()
    }
  }
  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(process.argv[2])