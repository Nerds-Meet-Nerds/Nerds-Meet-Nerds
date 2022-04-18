const router = require('express').Router();
const { Pictures } = require('../../models');

router.get('/getImage/:id', async (req,res) => {
    try {
        const image = await Pictures.findByPk(
            req.params.id)
        res.status(200).json(image.pic);
    }catch (err) {
        res.status(500).json(err);
    }
})

router.put('/editImage', async (req,res) => {
    try {
      const updatedImg = await Pictures.update(
        { pic: req.body.pic},
        { where: { id: req.body.user_id}})
        res.status(200).json(updatedImg);
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.post('/editImage', async (req,res) => {
//     try {
//       const updatedImg = await Pictures.update(
//         { pic: req.body.pic},
//         { where: { id: req.body.user_id}})
//         res.status(200).json(updatedImg);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router;