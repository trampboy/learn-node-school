/**
 * 授时服务器
 * Created by JingHongGang on 2021/10/24.
 */
const net = require('net')
const strftime = require('strftime')

const port = process.argv[2]
const server = net.createServer(socket => {
  socket.end(strftime('%F %R') + '\n')
})
server.listen(port)
