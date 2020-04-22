const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post genre'
  })
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get all genres'
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Get genre, id: ${id}`
  })
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Edit genre, id: ${id}`
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Delete genre, id: ${id}`
  })
});

module.exports = router;