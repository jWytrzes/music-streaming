const express = require('express');
const controller = require("../controllers/tracksController");
const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    const tracks = await controller.getAllTracks();
    res.status(200).json({ tracks: tracks  });
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

router.post('/', async (req, res, next) => {
  
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