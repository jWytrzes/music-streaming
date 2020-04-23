const database = require("../../databaseConnection");
const albumEntity = require("../entities/albumEntity");
const trackEntity = require("../entities/trackEntity");

exports.getAllAlbums = async (req, res, next) => {
  try {
    const connection = await database.makeConnection();
    const albums = await connection.getRepository(albumEntity).find({relations: ["artist", "tracks"]})
    albums && res.status(200).json({ albums });
    throw new Error('Album not found');
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.getByArtistID = async (req, res, next) => {
  const artistId = req.params.id;
  try {
    const connection = await database.makeConnection();
    const albums = await connection.getRepository(albumEntity).find({
      relations: ["artist", "tracks"],
      where: {
        artist: {
          ID: artistId
        }
      }
    });
    albums && res.status(200).json({ albums });
    throw new Error('Album not found');
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.getAlbum = async (req, res, next) => {
  const id = req.params.id;
  try {
    const connection = await database.makeConnection();
    const album = await connection.getRepository(albumEntity).findOne({relations: ["artist", "tracks"],where: {
      ID: id
    }} )
    res.status(200).json({ album });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.addAlbum = async(req, res, next) => {
  console.log(req.body);
  try {
    const connection = await database.makeConnection();
    await connection.getRepository(albumEntity).save({
      ...req.body,
      artist: {
        ID: req.body.artistID
      }
    });
    res.status(200).json({ status: 200, message: "Album added" });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

// exports.editGenre = async(req, res, next) => {
//   const id = req.params.id;
//   const newGenreData = req.body;
//   try {
//     const connection = await database.makeConnection();
//     await connection.getRepository(genre).update(id, newGenreData);
//     res.status(200).json({
//       message: 'Genre updated'
//     });
//   }
//   catch(error) {
//     res.status(error.status || 500).json({
//       message: error.message
//     })
//   }
// }

exports.deleteAlbum = async(req, res, next) => {
  const id = req.params.id;
  try {
    const connection = await database.makeConnection();
    const tracks = connection.getRepository(trackEntity);
    const relatedTracks = await tracks.find({
      relations:["album"], 
      where: {
        album: {
          ID: id
        }
      }
    });
    console.log(relatedTracks);
    await relatedTracks.forEach(async item => {
      const current = item;
      current.album = null;
      await tracks.save(current);
    });

    await connection.getRepository(albumEntity).delete(id);
    res.status(200).json({status: 200, message: 'Album deleted.' });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}