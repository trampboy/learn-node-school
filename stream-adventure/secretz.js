/**
 * An encrypted, gzipped tar file will be piped in on
 * process.stdin. To beat this challenge, for each file
 * in the tar input, print a hex-encoded md5 hash of
 * the file contents followed by a single space
 * followed by the file path, then a newline.
 *
 * Created by JingHongGang on 2021/10/30.
 */

const tar = require('tar')
const concat = require('concat-stream')
const crypto = require('crypto')

const parser = new tar.Parse()
parser.on('entry', function (e) {
  if (e.type !== 'File') {
    // throw away
    return e.resume()
  }
  e
    .pipe(crypto.createHash('md5', { encoding: 'hex' }))
    .pipe(concat(function (data) {
      console.log(data + ' ' + e.path)
    }))
})

process.stdin
  .pipe(crypto.createDecipheriv(process.argv[2], process.argv[3], process.argv[4]))
  .pipe(parser)