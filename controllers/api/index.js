const router = require('express').Router();
const userRoutes = require('./user-routes');
const chatroomRoutes = require('./chatroom-routes');
const nerdTypeRoutes = require('./nerd-type-routes');
const likedRoutes = require('./liked-routes');
const dislikedRoutes = require('./disliked-routes');



router.use('/users', userRoutes);
router.use('/chatrooms', chatroomRoutes);
router.use('/nerdtypes', nerdTypeRoutes);
router.use('/liked', likedRoutes);
router.use('/disliked', dislikedRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });



module.exports = router;
