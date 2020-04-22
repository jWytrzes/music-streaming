const express = require('express');
const router = express.Router();
const controller = require("../controllers/tracksController");

router.post('/', async (req, res, next) => {
  
});

router.get('/', async (req, res, next) => {
  try {
    const track = await controller.getAllTracks();
    res.status(200).json({ track: track  });
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
    message: `Get track, id: ${id}`
  })
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Edit track, id: ${id}`
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Delete track, id: ${id}`
  })
});

module.exports = router;