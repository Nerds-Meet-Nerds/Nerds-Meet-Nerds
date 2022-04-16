const router = require('express').Router();
const { User, Chatroom, Liked } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const allLiked = await Liked.findAll({ include: 
        [
            {model: User, attributes: ['username'] }, 
            {model: Liked, include: [{model: User, attributes: ['username']}]}
        ]});
      res.status(200).json(allLiked);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
      const likedUser = await Liked.findByPk(req.params.id, { include: 
        [
            {model: User, attributes: ['username'] }, 
            {model: Liked, include: [{model: User, attributes: ['username']}]}
        ]});
      res.status(200).json(likedUser);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.post('/like', async (req, res) => {
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