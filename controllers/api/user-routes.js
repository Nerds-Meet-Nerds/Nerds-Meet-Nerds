const router = require('express').Router();
const { User, Pictures } = require('../../models');
const { Op } = require('sequelize')


router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({
      where: {
        [Op.or]: [{username: req.body.locator}, {email: req.body.locator}]
      },
    });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username, email, or password. Please try again! 1' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username, email, password. Please try again! 2' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      req.session.username = userData.username;
      
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
        );
        
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.get('/all', async (req, res) => {
    try {
      const allUsers = await User.findAll({
        where: {id: {[Op.not]:req.session.user_id}}, 
        include: [Pictures]
      })
      res.status(200).json(allUsers)
    } catch (err) {
        res.status(500).json(err)
    }
  })

  
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/updateBio', async (req, res) => {
  try {
    const updUser = await User.update(
      {bio: req.body.newBio},
      {where: {id: req.session.user_id}})
    res.status(200).json(updUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

  //   router.post('/profile/new-bio', async (req, res) => {
//     try {
//         const newBio = await User.create({
//             username: req.body.username,
//             bio: req.body.bio,
//             user_id: req.session.userid
//         })
//         res.status(200).json(newBio)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

  // router.put('/profile/edit', async (req, res) => {
  //   try {
  //       const updatedBio = await User.update(
  //           { bio: req.body.bio, edited: true },
  //           { where: { id: req.body.user_id }})
  //       res.status(200).json(updatedBio)
  //   } catch (err) {
  //       res.status(500).json(err)
  //   }
  // })
  
  router.put('/editBio', async (req,res) => {
    try {
      const updatedBio = await User.update(
        { bio: req.body.bio},
        { where: { id: req.body.user_id}})
        res.status(200).json(updatedBio)
    } catch (err){
      res.status(500).json(err)
    }
  })

  router.post("/signup", async (req, res) => {
    try {
      const newUser = await User.create(req.body)
      const newPfp = await Pictures.create({user_id: newUser.id});
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.loggedIn = true;
        req.session.username = newUser.username;
        console.log(req.session);
        console.log( 
          '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
          req.session.cookie
          );
          
          res.status(200).json(newUser);
        });

    } catch (err) {
      res.status(500).json(err);
    }
  })

module.exports = router;