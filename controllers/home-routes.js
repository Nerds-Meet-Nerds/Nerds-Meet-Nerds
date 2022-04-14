const router = require('express').Router();
const { User, Chatroom, Nerd_Type, Liked, Disliked } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        console.log(req.session);
        const allPosts = await Post.findAll({ include: [{model: User, attributes: ['username'] }] });
        const postsData = allPosts.map((post) => post.get({ plain: true }));
        res.render('home', {req, postsData})
    } catch (err) {
        console.error(err)
        res.status(404).send('Page not found')
    }
})

router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/')
            return
        } else {
            res.render('login')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
