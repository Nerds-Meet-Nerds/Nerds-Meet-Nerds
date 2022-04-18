function parseChatlog(chatlog) {
    var chatArray = chatlog.split('|')
    chatArray.map(msg => msg.split(':'))
    return chatArray
}

module.exports = parseChatlog;