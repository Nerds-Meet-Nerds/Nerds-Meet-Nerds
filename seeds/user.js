const { User } = require('../models');

const userData = [
  {
    username: 'Vidal Not Tan',
    email: 'vidal@gmail.com',
    password: 'potato2',
  },
  {
    username: 'Vidal Maybe Tan',
    email: 'vidal22@gmail.com',
    password: 'potato3',
  },
  
  {
    username: 'GoatMan',
    email: 'goatMan@gmail.com',
    password: 'potato10',
  }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
