
const seedUser = require('./user');
const seedChat =  require('./chatRoom')
const seedLike =  require('./likes')
const seedPicture =  require('./picture')
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
    console.log('\n----- USER  SEEDED -----\n');
  
  await seedChat();
  console.log('\n----- CHAT SEEDED -----\n');
  
  await seedLike();
  console.log('\n----- LIKE USER SEEDED -----\n');
  
  await seedPicture();
  console.log('\n----- PICTURE SEEDED -----\n');
  
  process.exit(0);
};

seedAll();
