const { Chatroom } = require('../models');

const chatData = [
  {
    chat_log: 'Vidal Not Tan',
    last_message: 'potato2'
  },
  {
    chat_log: 'Vidal Maybe Tan',
    last_message: 'potato3'
  },

];

const seedChat = () => Chatroom.bulkCreate(chatData);

module.exports = seedChat;
