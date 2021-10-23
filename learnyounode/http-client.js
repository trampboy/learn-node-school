/**
 * Created by JingHongGang on 2021/10/21.
 */
const http = require('http')
const url = process.argv[2]
http.get(url, (response) => {
  response.setEncoding('utf8')
  response.on('data', function (data) {
    console.log(data)
  })
  response.on('error', (data) => {
    console.error(data)
  })
}).on('error', console.error)