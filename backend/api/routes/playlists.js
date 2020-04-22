const express = require('express');
const controller = require("../controllers/playlistsController");
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const playlists = await controller.getAllPlaylists();
    res.status(200).json({ playlists: playlists  });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post playlist'
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Get playlist, id: ${id}`
  })
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Edit playlist, id: ${id}`
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Delete playlist, id: ${id}`
  })
});

module.exports = router;