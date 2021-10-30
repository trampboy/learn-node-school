/**
 * Your program will be given a passphrase on
 * process.argv[2], an initialization value on
 * process.argv[3] and 'aes256' encrypted data will be written to stdin.
 * Created by JingHongGang on 2021/10/30.
 */

const crypto = require('crypto')
const passphrase = process.argv[2]
const initialization = process.argv[3]
process.stdin
  .pipe(crypto.createDecipheriv('aes256', passphrase, initialization))
  .pipe(process.stdout)