const database = require("../../databaseConnection");
const playlistEntity = require("../entities/playlistEntity");
const trackEntity = require("../entities/trackEntity");
const userEntity = require("../entities/userEntity");

exports.getAllPlaylists = async (req, res, next) => {
  try {
    const connection = await database.makeConnection();
    const playlists = await connection.getRepository(playlistEntity).find({relations: ["tracks", "user"]})
    res.status(200).json({ playlists });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.getPlaylist = async (req, res, next) => {
  const id = req.params.id;
  try {
    const connection = await database.makeConnection();
    const playlist = await connection.getRepository(playlistEntity).findOne({relations: ["tracks", "user"], where: {
      ID: id
    }} )
    playlist && res.status(200).json({ playlist });
    throw new Error("Playlist not found");
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.addPlaylist = async(req, res, next) => {
  const newPlaylist = {
    ...req.body,
    user: {
      ID: req.body.userID
    }
  }
  try {
    const connection = await database.makeConnection();
    await connection.getRepository(playlistEntity).save(newPlaylist);
    res.status(200).json({ message: "Playlist added" });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.deletePlaylist = async(req, res, next) => {
  const id = req.params.id;
  try {
    const connection = await database.makeConnection();
    const users = await connection.getRepository(userEntity);
    const usersWithPlaylists = await users.find({
      relations: ["playlists"],
    });
   
    usersWithPlaylists.forEach(async item => {
      let relatedIndex = item.playlists.findIndex(pl => pl.ID == id);
      if(relatedIndex >= 0) {
        let newUser = item;
        newUser.playlists.splice(relatedIndex, 1);
        await users.save(newUser);
      }
    });

    await connection.getRepository(playlistEntity).delete(id);
    res.status(200).json({ message: 'Playlist deleted.' });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.editPlaylist = async (req, res, next) => {
  try {
    const id = req.params.id;
    const trackList = JSON.parse(req.body.trackList);
    const connection = await database.makeConnection();
    const playlists = connection.getRepository(playlistEntity);
    const playlist = await playlists.findOne({relations: ["tracks"], where: {
      ID: id
    }} )
    if(playlist) {
      trackList.forEach(async trackId => {
        const newTrack = await connection.getRepository(trackEntity).findOne({
          relations: ["artist", "album"], 
          where: {
            ID: trackId
          }
        });
        playlist.tracks.push(newTrack);
        await playlists.save(playlist);
      })
    }
    else {
      throw new Error("Playlist not found");
    }
    
    res.status(200).json({ message: "Playlist updated" });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}