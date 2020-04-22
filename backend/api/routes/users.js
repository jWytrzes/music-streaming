const express = require('express');
const router = express.Router();
const controller = require("../controllers/usersController");

router.get('/', controller.getAllUsers);

router.post('/', controller.addUser);

router.get('/:id', controller.getUser);

router.delete('/:id', controller.deleteUser);

module.exports = router;