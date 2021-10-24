/**
 * 玩转异步服务器
 * Created by JingHongGang on 2021/10/24.
 */
const http = require('http')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
function getUrlData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let finalData = ''
      response.setEncoding('utf8')
      response.on('data', data => {
        finalData += data
      })
      response.on('end', () => {
        resolve(finalData)
      })
      response.on('error', err => {
        reject(err)
      })
    }).on('error', err => {
      reject(err)
    })
  })
}

getUrlData(url1)
  .then(data => {
    console.log(data)
    return getUrlData(url2)
  })
  .then(data => {
    console.log(data)
    return getUrlData(url3)
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })

