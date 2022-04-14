
const seedUser = require('./user');
const seedNerd = require('./nerdType');
const seedChat =  require('./chatRoom')
const seedLike =  require('./chatRoom')
const seedDislike =  require('./chatRoom')
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedNerd();
  console.log('\n----- NERD SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER  SEEDED -----\n');
  
  await seedChat();
  console.log('\n----- CHAT SEEDED -----\n');

  process.exit(0);
};

seedAll();
