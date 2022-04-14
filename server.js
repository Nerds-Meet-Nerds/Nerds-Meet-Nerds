const http = require('http');
const express = require('express');
const session = require('express-session')
const { Server } = require('socket.io');
const handlebars = require('express-handlebars');
const hbs = handlebars.create({});
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const server = http.createServer(app)
const io = new Server(server);

const sesh = {
    secret: process.env.SESH_SECRET,
    cookie: {
        maxAge: 1200000,
        httpOnly: true,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sesh));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use(express.static(`${__dirname}/public`));

// app.use(require('./controllers'))

// Runs when client connects
io.on('connection', async socket => {
    console.log('New WS Connection');
    console.log(socket.id);
    socket.on('chatMessage', msg => {
        io.emit('message', msg);
      });

    socket.emit('message', 'Welcome to Nerds Meet Nerds!')
    socket.broadcast.emit('message', 'Someone has joined')
})

const PORT = process.env.PORT || 3001;
(async () => {await sequelize.sync({ force: false })})()
server.listen(PORT, () => console.log(`Nerds Meet Nerds server running on ${PORT}`));