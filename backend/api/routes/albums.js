const express = require('express');
const controller = require('../controllers/albumsController');
const router = express.Router();

router.get('/', controller.getAllAlbums);

router.get('/:id', controller.getAlbum);

router.post('/', controller.addAlbum);

// router.patch('/:id', (req, res, next) => {
//   const id = req.params.id;
//   res.status(200).json({
//     message: `Edit album, id: ${id}`
//   })
// });

router.delete('/:id', controller.deleteAlbum);

module.exports = router;