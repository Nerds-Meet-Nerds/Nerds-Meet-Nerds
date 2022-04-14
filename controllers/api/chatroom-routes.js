const router = require('express').Router();
const { Chatroom } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const allChats = await Chatroom.findAll({ include: [{model: User, attributes: ['username']}, Post] });
      res.status(200).json(allComments);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
      const singComment = await Comment.findByPk(req.params.id, { include: [{model: User, attributes: ['username']}, Post] });
      res.status(200).json(singComment);
  } catch (err) {
      res.status(500).json(err)
  }
})

router.post('/new', async (req, res) => {
  try {
      const newComment = await Comment.create({
          content: req.body.content,
          post_id: req.body.post_id,
          user_id: req.session.userid
      })
      res.status(200).json(newComment)
  } catch (err) {
      res.status(500).json(err)
  }
})


module.exports = router;