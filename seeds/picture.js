const { Pictures } = require('../models');

const picData = [
  {
    pic:"",
    user_id: 1
  }
];

const seedPicture = () => Pictures.bulkCreate(picData);

module.exports = seedPicture;
