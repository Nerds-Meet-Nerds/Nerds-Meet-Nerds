const { User } = require('../models');

const userData = [
  {
    username: 'Vidal Not Tan',
    email: 'vidal@gmail.com',
    password: 'potato2'
  },
  {
    username: 'Vidal Maybe Tan',
    email: 'vidal@gmail.com',
    password: 'potato3'
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
