const database = require("../../databaseConnection");
const trackEntity = require("../entities/trackEntity");
const playlistEntity = require("../entities/playlistEntity");

exports.getAllTracks = async (req, res, next) => {
  try {
    const connection = await database.makeConnection();
    const tracks = await connection.getRepository(trackEntity).find({relations: ["album", "artist", "genre", "playlists"]})
    res.status(200).json({ tracks });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.getTrack = async (req, res, next) => {
  try {
    const id = req.params.id;
    const connection = await database.makeConnection();
    const track = await connection.getRepository(trackEntity).findOne({relations: ["album", "artist", "genre", "playlists"], where: {
      ID: id
    }} )
    track && res.status(200).json({ track });
    throw new Error("Track not found");
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.addTrack = async(req, res, next) => {
  const newTrack = {
    ...req.body,
    album: {
      ID: req.body.albumID
    },
    artist: {
      ID: req.body.artistID
    },
    genre: {
      ID: req.body.genreID,
    }
  }
  try {
    const connection = await database.makeConnection();
    await connection.getRepository(trackEntity).save(newTrack);
    res.status(200).json({ message: "Track added" });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.deleteTrack = async(req, res, next) => {
  const id = req.params.id;
  try {
    const connection = await database.makeConnection();
    await connection.getRepository(trackEntity).delete(id);
    res.status(200).json({ message: 'Playlist deleted.' });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.editTrack = async (req, res, next) => {
  try {
    const id = req.params.id;
    const playlistToAdd = req.body.playlistToAdd;
    const connection = await database.makeConnection();
    const tracks = await connection.getRepository(trackEntity);
    const track = await tracks.findOne({
      where: {
        ID: id
      },
      relations: ["playlists"]
    })
    if(track) {
      const playlists = connection.getRepository(playlistEntity);
        const playlist = await playlists.find({
          where: {
            ID: playlistToAdd
          }
        });
        if(playlist) {
          track.playlists.push(playlist);
          console.log(track.playlists)
          await tracks.save(track);
        }
    }
    else {
      throw new Error("Track not found");
    }
    
    res.status(200).json({ message: "Track updated" });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}