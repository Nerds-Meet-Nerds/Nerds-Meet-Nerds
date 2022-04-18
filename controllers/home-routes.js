const router = require('express').Router();
const { Chatroom, User, User_Likes } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage')
  } else {
    res.render('landing-page')
  }
})

// router.get('/homepage')
// router.get('/dashboard')
// router.get('/chatroom')
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
