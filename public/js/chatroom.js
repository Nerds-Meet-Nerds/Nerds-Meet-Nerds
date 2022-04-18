function parseChatlog(chatlog) {
    let chatArray = chatlog.split('|')
    chatArray = chatArray.splice(0, chatArray.length-1)
    const finalArr = chatArray.map(msg => msg.split(':'))
    return finalArr
}

async function getChatlog () {
    const thisChat = await fetch(`/api/chatrooms/${document.location.search.substring(1)}`)
    const DATA = await thisChat.json()
    const {chat_log, current_user_id, current_username, other_username} = DATA;
    const parsedData = parseChatlog(chat_log)
    return {parsedData, current_user_id, current_username, other_username};
}

async function insertChatlog() {
    const  {parsedData, current_user_id, current_username, other_username} = await getChatlog()
    console.log(current_user_id);
    console.log(parsedData);
    for (item of parsedData) {
        console.log(item[0], current_user_id);
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
        document.querySelector('#chat-window').append(chatDiv)
    }
}

insertChatlog()