const { User } = require('../models');

const userData = [
  {
    username: 'Jinx',
    email: 'jinx@gmail.com',
    password: 'potato',
    bio:'You may not need a father, but I could be your daddy...',

  },
  {
    username: 'Jade',
    email: 'jade@gmail.com',
    password: 'potato',

  },
  
  {
    username: 'Ruby',
    email: 'ruby@gmail.com',
    password: 'potato',
    bio:'I love little people',

  },
  {
    username: 'Gin',
    email: 'gin@gmail.com',
    password: 'potato',
    bio:'I love tall people',

  },
  {
    username: 'Jennifer',
    email: 'jennifer@gmail.com',
    password: 'potato',
    bio:'I want to feel alive.',

  },
  {
    username: 'Eugena',
    email: 'eugena@gmail.com',
    password: 'potato',
    bio:'Be gentle...',

  },
  {
    username: 'Zoe',
    email: 'zoe@gmail.com',
    password: 'potato',
    bio:'Daddy issues.',

  },
  {
    username: 'Adele',
    email: 'adele@gmail.com',
    password: 'potato',
    bio:"I can't sing, but I do know how to use my mouth.",

  },
  {
    username: 'Adriana',
    email: 'adriana@gmail.com',
    password: 'potato',
    bio:'It can be our secret...',

  },
  {
    username: 'Carina',
    email: 'carina@gmail.com',
    password: 'potato',
    bio:'Your wife can join us...',

  },
  {
    username: 'Desiree',
    email: 'desiree@gmail.com',
    password: 'potato',
    bio:'Im everything you ever Desired ;)',

  },
  {
    username: 'Grace',
    email: 'grace@gmail.com',
    password: 'potato',
    bio:'Lets sin...',

  },
  {
    username: 'Honey',
    email: 'honey@gmail.com',
    password: 'potato',
    bio:'I hope you have a sweet tooth, because I taste sweet baby.',

  },
  {
    username: 'Holly',
    email: 'holly@gmail.com',
    password: 'potato',
    bio:'I can make you feel Jolly.',

  },
  {
    username: 'Maria',
    email: 'maria@gmail.com',
    password: 'potato',
    bio:'Be my hubby, I need papers',

  },
  
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
