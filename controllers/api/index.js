const router = require('express').Router();
const userRoutes = require('./user-routes');
const chatroomRoutes = require('./chatroom-routes');
const likedRoutes = require('./liked-routes');

router.use('/users', userRoutes);
router.use('/chatrooms', chatroomRoutes);
router.use('/liked', likedRoutes);

router.get('/dev/forcelog', (req, res) => {
    req.session.destroy()
})

module.exports = router;
