const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post album'
  })
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get all albums'
  })
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