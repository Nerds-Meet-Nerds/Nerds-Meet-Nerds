// import models
const User = require('./User');
const Nerd_Type = require('./Nerd_Type');
const UserDislikes = require('./UserDislikes');
const UserLikes = require('./UserLikes');
const Chatroom = require('./Chatroom');



User.hasMany(Nerd_Type, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });
  
User.hasMany(Chatroom, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });

UserDislikes.hasOne(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });

UserLikes.hasOne(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });

Nerd_Type.belongsTo(User, {
    foreignKey: 'nerd_type',
    onDelete:"CASCADE"
  });
Chatroom.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
    
  });


module.exports = {
  User,
  Nerd_Type,
  Chatroom
};


/*
userDislikesOtherUser
  user_id
  disliked_user_id


  to find all the users someone dislikes
  userDisliikesOtherUser.findAll({where: {user_id: this.user}}) => a list of all the disliked user ids which u can use the include and attributes to populate with other data from their user table
*/