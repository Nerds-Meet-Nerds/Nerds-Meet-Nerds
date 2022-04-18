

// import models
const User = require('./User');
const Chatroom = require('./Chatroom');
const User_Likes = require('./User_Likes');
const Pictures = require('./Pictures')
// const Nerd_Type = require('./Nerd_Type');
// const Userdislikes = require('./Userdislikes');

User.hasMany(Chatroom, {
  foreignKey: 'user_id1',
  onDelete:"CASCADE"
})

Chatroom.belongsTo(User, {
  foreignKey: 'user_id1',
  onDelete:"CASCADE"
});

User_Likes.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete:"CASCADE"
});

User.hasMany(User_Likes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})



// User.hasMany(Nerd_Type, {
//     foreignKey: 'user_id',
//     onDelete:"CASCADE"
//   });
  
User.hasMany(Chatroom, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });
User.hasMany(Pictures, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });
  
Pictures.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });
User_Likes.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"
  });

Chatroom.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:"CASCADE"

  });

// Currently not being used


// module.exports = {
//   User,
//   Nerd_Type,
//   Chatroom,
//   Liked
// };

// Userdislikes.hasOne(User, {
//     foreignKey: 'user_id',
//     onDelete:"CASCADE"
//   });



  module.exports = {
    User,
    Chatroom,
    User_Likes,
    Pictures
};


/*
userDislikesOtherUser
  user_id
  disliked_user_id


  to find all the users someone dislikes
  userDisliikesOtherUser.findAll({where: {user_id: this.user}}) => a list of all the disliked user ids which u can use the include and attributes to populate with other data from their user table
*/

