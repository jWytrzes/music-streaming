const express = require('express');
const controller = require('../controllers/albumsController');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post album'
  })
});

router.get('/', async (req, res, next) => {
  try {
    const albums = await controller.getAllAlbums();
    res.status(200).json({ albums: albums });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Get album, id: ${id}`
  })
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Edit album, id: ${id}`
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Delete album, id: ${id}`
  })
});

module.exports = router;