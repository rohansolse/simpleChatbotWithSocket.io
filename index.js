const express = require('express')
const socket = require('socket.io')
const app = express()

const server = app.listen(8000,()=>{
    console.log("server is listening on 8000")
})

app.use(express.static('public'))

const io = socket(server)
io.on('connection',(socket)=>{
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })
    socket.on('typing',(handle)=>{
        socket.broadcast.emit('typing',handle)
    })
})
