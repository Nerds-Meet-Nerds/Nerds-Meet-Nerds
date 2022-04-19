const { Pictures } = require('../models');

const picData = [
  {
      pic:'https://cdn.80.lv/api/upload/content/a5/61d5acfcdda58.jpg',
      user_id: 1,
    
  },
  {
      pic:'https://i.pinimg.com/474x/e8/e0/42/e8e042a85fb0423a8f85666a374b70e9.jpg',
      user_id: 1,
    
  },
  {
      pic:'https://media.nichegamer.com/wp-content/uploads/2021/11/24174956/Arcane-11-24-21.jpg',
      user_id: 1,
    
  },
  {
      pic:'https://9tailedkitsune.com/wp-content/uploads/2021/04/zero-two_-cute.jpg',
      user_id: 2,
    
  },
  {
      pic:'https://i.ytimg.com/vi/0sLaYGjGIDo/maxresdefault.jpg',
      user_id: 2,
    
  },
  {
      pic:'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc2MjYxMDA5ODUyNjA1NjEz/ten-facts-about-zero-two.png',
      user_id: 2,
    
  },
  {
      pic:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Darling-In-The-Franxx-Zero-Two-Friends.jpg?q=50&fit=crop&w=1200&dpr=1.5',
      user_id: 2,
    
  },
  {
      pic:'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg',
      user_id: 3,
    
  },
  {
      pic:'https://w0.peakpx.com/wallpaper/432/513/HD-wallpaper-anime-girl-cool-nice-refrishin.jpg',
      user_id: 3,
    
  },
  {
      pic:'https://www.pngfind.com/pngs/m/352-3526599_cool-anime-girl-hd-png-download.png',
      user_id: 3,
    
  },
  {
      pic:'https://nntheblog.com/wp-content/uploads/2022/02/anime-cow-girl-930x620.jpg',
      user_id: 4,
    
  },
  {
      pic:'http://pm1.narvii.com/7236/9c7b0434f8956cd3ab55874912e4859824121243r1-500-948v2_uhq.jpg',
      user_id: 4,
    
  },
  {
      pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrbkm9n0XMHfftr-fzTCYQLKaWzllzkrqww&usqp=CAU',
      user_id: 4,
    
  },
  {
      pic:'https://i.pinimg.com/736x/23/e6/02/23e6029c5285471338418f1556811ce9.jpg',
      user_id: 5,
    
  },
  {
      pic:'https://animemotivation.com/wp-content/uploads/2019/07/hotaru-shidare-dagashi-blush.jpg',
      user_id: 5,
    
  },
  {
      pic:'https://wallpaperaccess.com/full/2522913.jpg',
      user_id: 5,
    
  },
  {
      pic:'https://i.pinimg.com/564x/5c/21/b1/5c21b1e95f5e9fc8ef41440402d898b2.jpg',
      user_id: 6,
    
  },
  {
      pic:'https://i.pinimg.com/564x/67/2f/09/672f09cfde5a4989370fb4444ecf748e.jpg',
      user_id: 6,
    
  },
  {
      pic:'https://i.pinimg.com/originals/66/15/81/661581ded515b92cd99cd2860717c1cd.jpg',
      user_id: 6,
    
  },
  {
      pic:'https://i.pinimg.com/564x/f4/fb/6b/f4fb6b6dc78c15007f8c16599ce6e03b.jpg',
      user_id: 7,
    
  },
  {
      pic:'https://i.pinimg.com/originals/fe/52/37/fe523787e3157f1ca17131a0dee9b86e.jpg',
      user_id: 7,
    
  },
  {
      pic:'https://w0.peakpx.com/wallpaper/741/561/HD-wallpaper-anime-girls-portrait-display-hinoaki5-brown-eyes-short-hair-brunette-short-shorts-higuchi-madoka.jpg',
      user_id: 7,
    
  },
  {
      pic:'https://i.pinimg.com/736x/61/f1/d9/61f1d99c883a79eccce91874c166ae06.jpg',
      user_id: 8,
    
  },
  {
      pic:'https://www.vhv.rs/dpng/d/21-211555_anime-girl-brown-hair-hd-png-download.png',
      user_id: 8,
    
  },
  {
      pic:'https://www.teahub.io/photos/full/39-399941_kawaii-anime-wallpaper-wallpaper-desktop-background-brown-hair.jpg',
      user_id: 8,
    
  },
  {
      pic:'https://steamuserimages-a.akamaihd.net/ugc/779607575830347483/4B6B585BD8C2F4D2F93F360B60CA46B1B7E2A536/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
      user_id: 9,
    
  },
  {
      pic:'https://i0.wp.com/9tailedkitsune.com/wp-content/uploads/2021/06/Ayuzawa.Misaki.full_.527113.jpg?resize=800%2C450&ssl=1',
      user_id: 9,
    
  },
  {
      pic:'https://e7.pngegg.com/pngimages/945/47/png-clipart-brown-haired-anime-character-the-idolmaster-cinderella-girls-anime-rin-shibuya-sad-girl-black-hair-manga.png',
      user_id: 9,
    
  },
  {
      pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BwJEsUYk25m1vssqOhlumiD7rwyvhEZL5w&usqp=CAU',
      user_id: 10,
    
  },
  {
      pic:'https://www.kindpng.com/picc/m/37-370178_girl-anime-brown-hair-sweet-smile-dress-hd.png',
      user_id: 10,
    
  },
  {
      pic:'https://c4.wallpaperflare.com/wallpaper/908/380/897/anime-girl-brown-hair-smiling-close-up-wallpaper-preview.jpg',
      user_id: 10,
    
  },
  {
      pic:'https://images.squarespace-cdn.com/content/v1/596001c2579fb355caec7aac/1593197028155-8W7JDXG6IYM3HULQGLLY/maki%2Bfire%2Bforce%2Btop%2B10%2Banime%2Bgirls%2B2020.jpg',
      user_id: 11,
    
  },
  {
      pic:'https://sportshub.cbsistatic.com/i/2021/03/17/936d3ab2-2b1e-4981-bb8e-c2efa9af1a86/fire-force-maki-oze-1197173.jpg',
      user_id: 11,
    
  },
  {
      pic:'https://i.ytimg.com/vi/QXIe9MZMphs/maxresdefault.jpg',
      user_id: 11,
    
  },
  {
      pic:'https://www.gojinshi.com/wp-content/uploads/2019/09/Anime-Girls-With-White-Hair-1024x538.jpg',
      user_id: 12,
    
  },
  {
      pic:'https://external-preview.redd.it/5QEGeA8qW991GQIdIQgQ__noFlnOIEhqeaJTjJM0lH8.png?auto=webp&s=fb7f8651808db1c440763668c7acfa825f8f4795',
      user_id: 12,
    
  },
  {
      pic:'https://pbs.twimg.com/media/EdpfUc_XgAkJTvO.png',
      user_id: 12,
    
  },
  {
      pic:'https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg',
      user_id: 13,
    
  },
  {
      pic:'https://imageio.forbes.com/specials-images/imageserve/61dc378bb5580fa0c8f8d8c8/nezuko/960x0.jpg?fit=bounds&format=jpg&width=960',
      user_id: 13,
    
  },
  {
      pic:'https://staticg.sportskeeda.com/editor/2022/01/bb34c-16425317373941.png',
      user_id: 13,
    
  },
  {
      pic:'https://thecinemaholic.com/wp-content/uploads/2021/12/Esdeath-Akame-Ga-Kill.jpeg',
      user_id: 14,
    
  },
  {
      pic:'https://hdwallpaperim.com/wp-content/uploads/2017/09/07/467962-Akame_ga_Kill-anime_girls-Esdeath.jpg',
      user_id: 14,
    
  },
  {
      pic:'https://preview.redd.it/cg557txu9vm31.jpg?auto=webp&s=b7e4aeef3ef6aa2ebe6c729ce5a5a1a4c7c2af16',
      user_id: 14,
    
  },
  {
      pic:'https://cdn.anime-planet.com/characters/primary/akeno-himejima-1.jpg?t=1625812991',
      user_id: 15,
    
  },
  {
      pic:'https://c.tenor.com/cGZKGRRjiRYAAAAC/akeno-akeno-himejima.gif',
      user_id: 15,
    
  },
  {
      pic:'https://c4.wallpaperflare.com/wallpaper/273/77/151/himejima-akeno-highschool-dxd-anime-girls-wallpaper-preview.jpg',
      user_id: 15,
    
  },
];

const seedPicture = () => Pictures.bulkCreate(picData);

module.exports = seedPicture;
