const express = require('express');
const controller = require('../controllers/artistsController');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post artist'
  })
});

router.get('/', async (req, res, next) => {
  try {
    const artists = await controller.getAllArtists();
    res.status(200).json({ artists: artists });
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
    message: `Get artist, id: ${id}`
  })
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Edit artist, id: ${id}`
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Delete artist, id: ${id}`
  })
});

module.exports = router;