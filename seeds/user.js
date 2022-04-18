const { User } = require('../models');

const userData = [
  {
    username: 'Jinx',
    email: 'jinx@gmail.com',
    password: 'potato',
    bio:'You may not need a father, but I could be your daddy...',

  },
  {
    username: 'Jade',
    email: 'jade@gmail.com',
    password: 'potato',

  },
  
  {
    username: 'Ruby',
    email: 'ruby@gmail.com',
    password: 'potato',
    bio:'I love little people',

  }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
