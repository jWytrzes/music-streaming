const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post track'
  })
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get all tracks'
  })
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