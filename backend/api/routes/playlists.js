const express = require('express');
const controller = require("../controllers/playlistsController");
const router = express.Router();

router.get('/', controller.getAllPlaylists);

router.get('/:id', controller.getPlaylist);

router.post('/', controller.addPlaylist);

router.delete('/:id', controller.deletePlaylist);

router.patch('/:id', controller.editPlaylist);

module.exports = router;