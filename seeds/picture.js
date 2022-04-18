const { Pictures } = require('../models');

const picData = [
  {
      pic:'https://cdn.80.lv/api/upload/content/a5/61d5acfcdda58.jpg',
      user_id: 1,
    
  },
  {
      pic:'https://9tailedkitsune.com/wp-content/uploads/2021/04/zero-two_-cute.jpg',
      user_id: 2,
    
  },
  {
      pic:'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg',
      user_id: 3,
    
  },
  {
      pic:'https://nntheblog.com/wp-content/uploads/2022/02/anime-cow-girl-930x620.jpg',
      user_id: 4,
    
  },
  {
      pic:'https://i.pinimg.com/736x/23/e6/02/23e6029c5285471338418f1556811ce9.jpg',
      user_id: 5,
    
  },
  {
      pic:'https://i.pinimg.com/564x/5c/21/b1/5c21b1e95f5e9fc8ef41440402d898b2.jpg',
      user_id: 6,
    
  },
  {
      pic:'https://i.pinimg.com/564x/f4/fb/6b/f4fb6b6dc78c15007f8c16599ce6e03b.jpg',
      user_id: 7,
    
  },
  {
      pic:'https://i.pinimg.com/736x/61/f1/d9/61f1d99c883a79eccce91874c166ae06.jpg',
      user_id: 8,
    
  },
  {
      pic:'https://steamuserimages-a.akamaihd.net/ugc/779607575830347483/4B6B585BD8C2F4D2F93F360B60CA46B1B7E2A536/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
      user_id: 9,
    
  },
  {
      pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BwJEsUYk25m1vssqOhlumiD7rwyvhEZL5w&usqp=CAU',
      user_id: 10,
    
  },
  {
      pic:'https://images.squarespace-cdn.com/content/v1/596001c2579fb355caec7aac/1593197028155-8W7JDXG6IYM3HULQGLLY/maki%2Bfire%2Bforce%2Btop%2B10%2Banime%2Bgirls%2B2020.jpg',
      user_id: 11,
    
  },
  {
      pic:'https://www.gojinshi.com/wp-content/uploads/2019/09/Anime-Girls-With-White-Hair-1024x538.jpg',
      user_id: 12,
    
  },
  {
      pic:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg',
      user_id: 13,
    
  },
  {
      pic:'https://thecinemaholic.com/wp-content/uploads/2021/12/Esdeath-Akame-Ga-Kill.jpeg',
      user_id: 14,
    
  },
  {
      pic:'https://cdn.anime-planet.com/characters/primary/akeno-himejima-1.jpg?t=1625812991',
      user_id: 15,
    
  },
];

const seedPicture = () => Pictures.bulkCreate(picData);

module.exports = seedPicture;
