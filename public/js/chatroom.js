async function init() {
    const chatWindow = document.querySelector('#chat-window');
    const chatroom_id = document.location.search.substring(1);
    const {current_user_id, current_username, other_username} = await getChatlog()

        document.querySelector('#msg-name').innerText = other_username
    
    function parseChatlog(chatlog) {
        let chatArray = chatlog.split('|')
        chatArray = chatArray.splice(0, chatArray.length-1)
        const finalArr = chatArray.map(msg => msg.split(':'))
        return finalArr
    }
    
    async function getChatlog () {
        const thisChat = await fetch(`/api/chatrooms/${chatroom_id}`)
        const DATA = await thisChat.json()
        const {chat_log, current_user_id, current_username, other_username} = DATA;
        const parsedData = parseChatlog(chat_log)
        return {parsedData, current_user_id, current_username, other_username, chat_log};
    }
    
    /* ----------------------------Socket.io setup---------------------------------------*/
    const socket = io();
    
    socket.emit('userJoin', current_username);
    
    document.querySelector('#chat-footer').addEventListener('submit', async e => {
        e.preventDefault();
        const {chat_log} = await getChatlog()
        const msg = e.target.msg.value;
        const resp = await fetch(`/api/chatrooms/update/${chatroom_id}`, {
            method: 'PUT',
            body: JSON.stringify({log:`${chat_log}${current_user_id}:\'${msg}\'|`, last: msg}),
            headers: { 'Content-Type': 'application/json' }
        })
        if (resp.ok) {
            socket.emit(`chatMessage`, msg)
            appendSendChat(msg)
            chatWindow.scrollTop = chatWindow.scrollHeight;
            e.target.elements.msg.value = ''
            e.target.elements.msg.focus()
        } else {
            alert('Something went terribly wrong')
        }
    })
    
    socket.on('joinAlert', username => {
        alert(`${username} has just logged into the chat room!`)
    })

    socket.on('incMessage', msg => {
        appendRecChat(msg)
        chatWindow.scrollTop = chatWindow.scrollHeight;
    })
    
        document.querySelector('#send-msg').addEventListener('keydown', async e => {
            if(e.key === "Enter"&& !e.shiftKey){            
                e.preventDefault();
                const {chat_log} = await getChatlog()
                const msg = document.querySelector('#send-msg').value;
                const resp = await fetch(`/api/chatrooms/update/${chatroom_id}`, {
                    method: 'PUT',
                    body: JSON.stringify({log:`${chat_log}${current_user_id}:\'${msg}\'|`, last: msg}),
                    headers: { 'Content-Type': 'application/json' }
                })
                if (resp.ok) {
                    socket.emit(`chatMessage`, msg)
                    appendSendChat(msg)
                    chatWindow.scrollTop = chatWindow.scrollHeight;
                    document.querySelector('#send-msg').value = ''
                    document.querySelector('#send-msg').focus()
                } else {
                    alert('Something went terribly wrong')
                }
            }
        })
    
    
    /* ----------------------------Main page setup---------------------------------------*/




    document.querySelector('#leave-room-btn').addEventListener('click', async e => {
        e.preventDefault()
        const resp = await fetch(`/api/chatrooms/destroy/${chatroom_id}`, {
            method: 'DELETE'
        })
        if (resp.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Something went terribly wrong...')
        }
    })
    
    async function renderChatlog() {
        const {parsedData} = await getChatlog()
        for (item of parsedData) {
            var chatDiv = document.createElement('div')
            var whoDiv = document.createElement('p')
            var msgDiv = document.createElement('p')
            if (item[0] == current_user_id) {
                chatDiv.id = 'chat-sent'
                whoDiv.innerText = current_username;
            } else {
                chatDiv.id = 'chat-received'
                whoDiv.innerText = other_username;
            }
            whoDiv.id = 'who-and-time';
            msgDiv.innerText = item[1]
            chatDiv.append(whoDiv)
            chatDiv.append(msgDiv)
            chatWindow.append(chatDiv)
        }
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    async function appendSendChat(msg) {
        var chatDiv = document.createElement('div')
        var whoDiv = document.createElement('p')
        var msgDiv = document.createElement('p')
        chatDiv.id = 'chat-sent';
        whoDiv.innerText = current_username;
        whoDiv.id = 'who-and-time';
        msgDiv.innerText = msg;
        chatDiv.append(whoDiv)
        chatDiv.append(msgDiv)
        chatWindow.append(chatDiv)
    }

    async function appendRecChat(msg) {
        var chatDiv = document.createElement('div')
        var whoDiv = document.createElement('p')
        var msgDiv = document.createElement('p')
        chatDiv.id = 'chat-received';
        whoDiv.innerText = other_username;
        whoDiv.id = 'who-and-time';
        msgDiv.innerText = msg;
        chatDiv.append(whoDiv)
        chatDiv.append(msgDiv)
        chatWindow.append(chatDiv)
    }
    
    renderChatlog()
}
init()