const express = require('express');
const router = express.Router();
const controller = require("../controllers/usersController");

router.get('/', async (req, res, next) => {
  try {
    const users = await controller.getAllUsers();
    res.status(200).json({ users: users  });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
});

router.post('/', (req, res, next) => {
  const item = {
    name: req.body.name
  }
  res.status(200).json({
    message: 'Post user',
    item: item
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