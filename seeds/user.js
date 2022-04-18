const { User } = require('../models');

const userData = [
  {
    username: 'Vidal Not Tan',
    email: 'vidal@gmail.com',
    password: 'potato',
  },
  {
    username: 'Vidal Maybe Tan',
    email: 'vidal22@gmail.com',
    password: 'potato',
  },
  
  {
    username: 'GoatMan',
    email: 'goatMan@gmail.com',
    password: 'potato',
  }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
