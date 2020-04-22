const express = require('express');
const controller = require("../controllers/tracksController");
const router = express.Router();


router.get('/', controller.getAllTracks);

router.get('/:id', controller.getTrack);

router.post('/',controller.addTrack);

router.patch('/:id', controller.editTrack);

router.delete('/:id', controller.deleteTrack);

module.exports = router;