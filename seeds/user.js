const { User } = require('../models');

const userData = [
  {
    username: 'Vidal Not Tan',
    email: 'vidal@gmail.com',
    password: 'potato2',
    // bio:'',
    interest: 'Book nerd'
  },
  {
    username: 'Vidal Maybe Tan',
    email: 'vidal22@gmail.com',
    password: 'potato3',
    bio:'I am a wizard',
    interest: 'Anime nerd'
  },
  
  {
    username: 'GoatMan',
    email: 'goatMan@gmail.com',
    password: 'potato10',
    bio:'I love little people',
    interest: 'Movie nerd'
  }

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
