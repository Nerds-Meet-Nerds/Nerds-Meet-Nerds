const router = require('express').Router();
const { Chatroom, User, User_Likes } = require('../models');


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage')
  } else {
    res.render('/landing-page')
    }
  })
    .catch((err) => {
      res.status(500).json(err);
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/profile')
  } else {
    res.render('/landing-page')
    }
  })
    .catch((err) => {
      res.status(500).json(err);
});


module.exports = router;
