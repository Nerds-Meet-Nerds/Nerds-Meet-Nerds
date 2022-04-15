const { Nerd_Type } = require('../models');

const nerdData = [
  {
    type: 'Anime Nerd',
    user_id:1
  },
  {
    type :'Gamer Nerd',
    user_id:2
  },
  {
    type :'Book Nerd',
    user_id:3
  }
];

const seedNerd = () => Nerd_Type.bulkCreate(nerdData);

module.exports = seedNerd;
