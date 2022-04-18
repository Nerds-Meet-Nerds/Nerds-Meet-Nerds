
const seedUser = require('./user');
const seedNerd = require('./nerdType');
const seedChat =  require('./chatroom')
const seedLike =  require('./likes')
const initImages = require('./images.js')
// const seedDislike =  require('./dislikes')
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
    console.log('\n----- USER  SEEDED -----\n');

    
    await seedChat();
    console.log('\n----- CHAT SEEDED -----\n');
    
    await seedLike();
    console.log('\n----- CHAT SEEDED -----\n');


    await initImages();
    
    // Currently not being used
    
    // await seedNerd();
    // console.log('\n----- NERD SEEDED -----\n');
   // await seedDislike();
   // console.log('\n----- CHAT SEEDED -----\n');

  process.exit(0);
};

seedAll();
