const {Chatroom} = require('../models');

const chatData = [
  {
    chat_log: "1:'Hey there cutie! I was thinking that we should hang out!'|2:'Oh hello! Okay I would be interested. What are you interested in?'|1:'I like blowing up stuff! Explosions are really pretty'|2:'Oh... that's interesting'|",
    last_message: 'Hi baby',
    user_id1:1,
    user_id2:2
  },
  {
    chat_log: "2:'Hey there cutie! I was thinking that we should hang out!'|3:'Oh hello! Okay I would be interested. What are you interested in?'|2:'I like blowing up stuff! Explosions are really pretty'|3:'Oh... that's interesting'|",
    last_message: 'Hello',
    user_id1:3,
    user_id2:2
  },
  {
    chat_log: "1:'Hey there cutie! I was thinking that we should hang out!'|3:'Oh hello! Okay I would be interested. What are you interested in?'|1:'I like blowing up stuff! Explosions are really pretty'|3:'Oh... that's interesting'|",
    last_message: 'Hello',
    user_id1:1,
    user_id2:3
  },

];

const seedChat = () => Chatroom.bulkCreate(chatData);

module.exports = seedChat;
