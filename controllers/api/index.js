const router = require('express').Router();
const userRoutes = require('./user-routes');
const chatroomRoutes = require('./chatroom-routes');



router.use('/users', userRoutes);
router.use('/chatrooms', postRoutes);

router.use('/', (req,res)=> {
    res.send("<h1>Hello World!</h1>")

});



module.exports = router;
