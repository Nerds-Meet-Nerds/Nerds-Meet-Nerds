const { Pictures } = require('../models');

const picData = [
  {
      user_id: 1,
    //   pic: ''
  }
];

const seedPicture = () => Pictures.bulkCreate(picData);

module.exports = seedPicture;
