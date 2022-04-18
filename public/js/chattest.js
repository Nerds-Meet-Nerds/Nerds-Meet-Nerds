const socket = io();

document.querySelector('#chat-form').addEventListener('submit', e => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage', msg)
})

socket.on('message', message => {
    console.log(message);
})