const io = require('socket.io')()
const Store = require('./Store')

io.on('connection', client => {
  console.log('client established connection')
  client.on('setVideoUrl', url => {
    Store.setVideoUrl(url)
    console.log('sending video url to clients')
    io.emit('videoUrlSet', url)
  })
})

const port = 8000
io.listen(port)
console.log('listening on port ', port)
