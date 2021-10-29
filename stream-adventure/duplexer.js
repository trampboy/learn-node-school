/**
 * Write a program that exports a function that spawns a process from a cmd
 * string and an args array and returns a single duplex stream joining
 * together the stdin and stdout of the spawned process
 *
 * Created by JingHongGang on 2021/10/28.
 */

const {spawn} = require('child_process')
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
  const cmdStream = spawn(cmd, args)
  return duplexer(cmdStream.stdin, cmdStream.stdout);
}