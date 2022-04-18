const {Chatroom} = require('../models');

const chatData = [
  {
    chat_log: 'Not Ugly',
    last_message: 'Hi baby',
    user_id1:1,
    user_id2:2
  },
  {
    chat_log: 'Ugly',
    last_message: 'Hello',
    user_id1:3,
    user_id2:2
  },
  {
    chat_log: 'Ugly',
    last_message: 'Hello',
    user_id1:1,
    user_id2:3
  }

];

const seedChat = () => Chatroom.bulkCreate(chatData);

module.exports = seedChat;
