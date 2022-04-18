const router = require('express').Router();
const { User, Chatroom, User_Likes } = require('../../models');
// const withAuth = require("../utils/auth");

router.get('/homepage', async (req, res) => {
  try {
      const allMatchedUsers = await User_Likes.findAll({ include: 
        [
            {model: User, attributes: ['username'] }, 
            {model: User_Likes, include: [{model: User, attributes: ['username']}]}
        ]});
      res.status(200).json(allMatchedUsers);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/homepage/:id', async (req, res) => {
  try {
      const matchedUser = await User_Likes.findByPk(req.params.id, { include: 
        [
            {model: User, attributes: ['username'] }, 
            {model: User_Likes, include: [{model: User, attributes: ['username']}]}
        ]});
        const likedUser = await User.create({
          username: req.body.username,
          password: req.body.password,
        });
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.username = userData.username;
          req.session.loggedIn = true;
          
          res.status(200).json(matchedUser);
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})


router.get("/homepage", (req, res) => {
  try {
    if (req.session.likedUser) {
      res.redirect('/homepage')
    } else {
      res.render('/landing-page')
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", (req, res) => {
  res.render("homepage/dashboard", {
    layout: "dashboard"
  });
});

router.get("/chatroom", (req, res) => {
  res.render("liked-user", {
    layout: "chatroom"
  });
});

router.post('/chatroom/new', async (req, res) => {
  try {
    const {userid} = req.session
    // insert user_id and liked_id into UserLikes
    // Body ( liked_person_user_id)
    //create a chat between user and liked user
      const newChat = await Chatroom.create({
        chat_log: req.body.chat_log,
        user_id: userid
    })
      res.status(200).json(newChat)
  } catch (err) {
      res.status(500).json(err)
  }
})


module.exports = router;