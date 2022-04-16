const router = require('express').Router();
const { Chatroom, User, Nerd_Type, Liked } = require('../models');
const withAuth = require('../utils/auth');


// get all chatlog from chatroom
router.get("/", (req, res) => {
    Chatroom.findAll({
      include: [User],
    })
      .then((chatroomData) => {
        const chatrooms = chatroomData.map((messages) => messages.get({ plain: true }));
  
        res.render("allChatLog", { messages });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  
  // get single post
  router.get("/chatroom/:id", (req, res) => {
    Chatroom.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Nerd_Type,
          include: [User],
        },
      ],
    })
      .then((chatroomData) => {
        if (chatroomData) {
          const post = chatroomData.get({ plain: true });
  
          res.render("single-post", { post });
        } else {
          res.status(404).end();
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  
  router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });
  
  module.exports = router;
