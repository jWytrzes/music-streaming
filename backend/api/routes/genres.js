const express = require('express');
const controller = require('../controllers/genresController');
const router = express.Router();

router.get('/', controller.getAllGenres);

router.post('/', controller.addGenre);

router.patch('/:id', controller.editGenre);

router.delete('/:id', controller.deleteGenre);

module.exports = router;