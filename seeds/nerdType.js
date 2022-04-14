const {Nerd_Type } = require('../models');

const nerdData = [
  {
    type: ['Anime Nerd', 'Gamer Nerd', 'Book Nerd']
  }
];

const seedNerd = () => Nerd_Type.bulkCreate(nerdData);

module.exports = seedNerd;
