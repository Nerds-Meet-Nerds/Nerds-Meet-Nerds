const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({ include: 
            [
                {model: User, attributes: ['username'] }, 
                {model: Comment, include: [{model: User, attributes: ['username']}]}
            ]});
        res.status(200).json(allPosts);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const singPost = await Post.findByPk(req.params.id, { include: 
            [
                { model: User, attributes: ['username'] }, 
                {model: Comment, include: [{model: User, attributes: ['username']}]}
            ]});
        res.status(200).json(singPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/new', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.userid
        })
        res.status(200).json(newPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/edit', async (req, res) => {
    try {
        const updPost = await Post.update(
            { content: req.body.content, edited: true },
            { where: { id: req.body.post_id }})
        res.status(200).json(updPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/destroy/:id', async (req, res) => {
    try {
        const delComments = await Comment.destroy({where: {post_id: req.params.id}})
        const delPost = await Post.destroy({where: {id: req.params.id}})
        res.status(200).json({delComments, delPost})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;