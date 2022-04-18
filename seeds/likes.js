const {User_Likes} = require('../models');

const likeData = [
  {
   liked_id:2,
   user_id: 1
  },
  {
   liked_id:1,
   user_id: 2
  },
  {
   liked_id:2,
   user_id: 3
  }
];

const seedLike = () => User_Likes.bulkCreate(likeData);

module.exports = seedLike;
