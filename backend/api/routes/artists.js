const express = require('express');
const router = express.Router();
const controller = require('../controllers/artistsController');



router.get('/', controller.getAllArtists);

router.get('/:id', controller.getArtist);

router.post('/', controller.addArtist);

router.delete('/:id', controller.deleteArtist);

module.exports = router;