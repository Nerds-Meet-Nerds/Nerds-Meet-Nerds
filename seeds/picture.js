const { Pictures } = require('../models');

const picData = [
  {
    pic: '../',
    user_id:1
  },
  {
    pic :'Gamer Nerd',
    user_id:2
  },
  {
    pic :'Book Nerd',
    user_id:3
  }
];

const seedPicture = () => Pictures.bulkCreate(picData);

module.exports = seedPicture;
