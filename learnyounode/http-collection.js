/**
 * Created by JingHongGang on 2021/10/23.
 */
const http = require('http')
const url = process.argv[2]
http.get(url, (response) => {
  let rawData = ''
  response.setEncoding('utf8')
  response.on('data', function (data) {
    rawData += data
  })
  response.on('end', function () {
    const parsedData = rawData.toString()
    console.log(parsedData.length)
    console.log(parsedData)
  })
  response.on('error', (data) => {
    console.error(data)
  })
}).on('error', console.error)
