const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body);
  const item = {
    name: req.body.name
  }
  res.status(200).json({
    message: 'Post user',
    item: item
  })
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get all users'
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Get user, id: ${id}`
  })
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Edit user, id: ${id}`
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Delete user, id: ${id}`
  })
});

module.exports = router;