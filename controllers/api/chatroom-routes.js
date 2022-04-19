const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { Chatroom, User_Likes, User } = require('../../models');
const { route } = require('../home-routes');


router.get("/", withAuth, async (req, res) => {
  try {
    const allChatrooms = await Chatroom.findAll({ where: { userId: req.session.userId }})
    const chatroomsData = allChatrooms.map((chat) => chat.get({ plain: true }));

    res.render("all-chats", { ...chatroomsData });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
})

router.get("/:id", async (req, res) => {
  try {
    const fChatroom = await Chatroom.findByPk(req.params.id)
    const current_user = await User.findOne( { where: { id: req.session.user_id } } )
    var other_user;
    switch (current_user.id) {
      case fChatroom.user_id1:
        other_user = await User.findOne( { where: { id: fChatroom.user_id2 } } )
        break;
      case fChatroom.user_id2:
        other_user = await User.findOne( { where: { id: fChatroom.user_id1 } } )
        break;
    }
    if (fChatroom) {
      var chatroomData = fChatroom.get({ plain: true });
      chatroomData.current_user_id = current_user.id;
      chatroomData.current_username = current_user.username;
      chatroomData.other_username = other_user.username;
      res.status(200).json(chatroomData)
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

router.put('/update/:id', async (req, res) => {
  try {
    const updChat = await Chatroom.update(
      { chat_log: req.body.log },
      { where: { id: req.params.id }})

    res.status(200).json(updChat)
  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
});

router.post('/create/:id', async (req, res) => {
  try {
      const newChatroom = await Chatroom.create({ user_id1: req.session.user_id, user_id2: req.params.id })
      res.status(200).json(newChatroom.id);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.delete('/destroy/:id', async (req, res) => {
    const {chat_log} = req.body;
    const {chatroom_id} = req.session;
  try {
      await Chatroom.destroy({ chat_log, chatroom_id})
      await User_Likes.destroy(
            {where: {id: req.params.id}
        })
        const updatedChats = await Chatroom.findAll({ include: 
            [
                {model: User, attributes: ['username'] }, 
                {model: User_Likes, include: [{model: User, attributes: ['username']}]}
            ]});
      res.status(200).json(updatedChats)
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }
})

module.exports = router;