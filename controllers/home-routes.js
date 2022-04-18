const router = require('express').Router();
const withAuth = require('../utils/auth')
const structureChat = require('../utils/structureChat')
const { Chatroom, User, User_Likes } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage')
  } else {
    res.render('landing-page')
  }
})

router.get("/homepage", withAuth, (req, res) => {
  try {
      res.render('homepage')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, (req, res) => {
  try {
    res.render('profile')
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const chatroomData = await structureChat(req)

    res.render('dashboard', {chatroomData})
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

router.get('/chatroom', withAuth, (req, res) => {
  try {
    res.render('chatroom')
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})
// router.get('/chatroom/:id')

router.get("/login", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/homepage')
    } else {
      res.render('/landing-page')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/signup", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/profile')
    } else {
      res.render('/landing-page')
      }
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
