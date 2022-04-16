const router = require('express').Router();
const { Chatroom, Liked, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const allChats = await Chatroom.findAll({ include: 
          [
              {model: User, attributes: ['username'] }, 
              {model: Liked, include: [{model: User, attributes: ['username']}]}
          ]});
          console.log('allChats', allChats);
      res.status(200).json(allChats);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
  try {
      const singleChat = await Chatroom.findByPk(id, { include: 
        [
            {model: User, attributes: ['username'] }, 
            {model: Liked, include: [{model: User, attributes: ['username']}]}
        ]});
      res.status(200).json(singleChat);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.post('/new', async (req, res) => {
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
      await Liked.destroy(
            {where: {id: req.params.id}
        })
        const updatedChats = await Chatroom.findAll({ include: 
            [
                {model: User, attributes: ['username'] }, 
                {model: Liked, include: [{model: User, attributes: ['username']}]}
            ]});
      res.status(200).json(updatedChats)
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }
})

module.exports = router;