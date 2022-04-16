// import models
const User = require('./User');
const Nerd_Type = require('./Nerd_Type');
const Chatroom = require('./Chatroom');
const Liked = require('./Liked');


User.hasMany(Nerd_Type, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });
  
User.hasMany(Chatroom, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });
  
Nerd_Type.belongsTo(User, {
    foreignKey: 'nerd_type',
    onDelete:"CASCADE"
  })
Chatroom.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
    
  });
Liked.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
    
  });


module.exports = {
  User,
  Nerd_Type,
  Chatroom,
  Liked
};
