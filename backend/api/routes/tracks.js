const express = require('express');
const router = express.Router();
const db = require("../controllers/tracksController");

router.post('/', async (req, res, next) => {
  
});

router.get('/', async (req, res, next) => {
  const track = await db.getAllTracks();
  res.status(200).json({ track: track  });
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