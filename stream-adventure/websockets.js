/**
 * In this adventure, write a websocket client that uses the ws module,
 * generate a stream on top of the websocket client, write the string
 * "hello\n" to the stream and pipe it to process.stdout.
 *
 * Created by JingHongGang on 2021/10/28.
 */
const WebSocket = require('ws')
const ws = new WebSocket("ws://localhost:8099")
const stream = WebSocket.createWebSocketStream(ws)
stream.write('hello\n')
stream.end()
stream.pipe(process.stdout)