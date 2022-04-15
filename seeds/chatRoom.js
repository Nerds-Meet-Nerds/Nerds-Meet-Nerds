const {Chatroom} = require('../models');

const chatData = [
  {
    chat_log: 'Not Ugly',
    last_message: 'Hi baby',
    user_id:1
  },
  {
    chat_log: 'Ugly',
    last_message: 'Hello',
    user_id:3
  },
  {
    chat_log: 'Ugly',
    last_message: 'Hello',
    user_id:2
  }

];

const seedChat = () => Chatroom.bulkCreate(chatData);

module.exports = seedChat;
