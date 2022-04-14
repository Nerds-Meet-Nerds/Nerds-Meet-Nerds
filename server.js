const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = new Server(server);

// Set's static folder to public
app.use(express.static(`${__dirname}/public`));

// Runs when client connects
io.on('connection', async socket => {
    console.log('New WS Connection');
    console.log(socket.id);
    // io.in(socket.id).socketsJoin('room1')

    // const room = await io.in('room1').fetchSockets()
    // room.forEach( socket => {
    //     console.log(socket.id);
    // })
    socket.on('chatMessage', msg => {
        io.emit('message', msg);
      });

    socket.emit('message', 'Welcome to Nerds Meet Nerds!')
    socket.broadcast.emit('message', 'Someone has joined')
})

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Nerds Meet Nerds server running on ${PORT}`));