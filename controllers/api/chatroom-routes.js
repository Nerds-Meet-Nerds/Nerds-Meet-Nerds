const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { Chatroom, User_Likes, User } = require('../../models');


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
    const fChatroom = await Chatroom.findByPk(req.params.id, {
      include: [
        User,
        {
          model: User_Likes,
          include: [User],
        },
      ],
    })
    if (fChatroom) {
      const chatroomData = fChatroom.get({ plain: true });
      res.render("single-chat", { ...chatroomData });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/new-chat', async (req, res) => {
    const {chat_log} = req.body;
    const {userid} = req.session;
  try {
      const newChat = await Chatroom.create({
        chat_log,
        user_id: userid
    })
      res.status(200).json(newChat)
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