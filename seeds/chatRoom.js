const {Chatroom} = require('../models');

const chatData = [
  {
    chat_log: "1:'Hey there Cutie! I was thinking that we should hang out!'|2:'Oh hello! Okay I would be interested. What are you interested in?'|1:'I like blowing up stuff! Explosions are really pretty'|2:'Oh... that's interesting'|",
    last_message: 'Oh... that\'s interesting',
    user_id1:1,
    user_id2:2
  },
  {
    chat_log: "2:'How are you doing? You look nice!'|3:'Thank you! I like taking selfies.'|2:'I'm not much into taking pictures of myself. But that's cool it's your passion. What other kind of stuff are you into?'|3:'If you take me out on a date, maybe I'll tell you...'|",
    last_message: 'If you take me out on a date, maybe I\'ll tell you...',
    user_id1:3,
    user_id2:2
  },
  {
    chat_log: "1:'What's up good looking'|",
    last_message: 'What\'s up good looking',
    user_id1:1,
    user_id2:3
  },

];

const seedChat = () => Chatroom.bulkCreate(chatData);

module.exports = seedChat;
