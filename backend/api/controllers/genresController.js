const database = require("../../databaseConnection");
const genreEntity = require("../entities/genreEntity");
const track = require("../entities/trackEntity");

exports.getAllGenres = async (req, res, next) => {
  try {
    const connection = await database.makeConnection();
    const genres = await connection.getRepository(genreEntity).find({relations: ["tracks"]})
    res.status(200).json({ genres: genres  });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.addGenre = async(req, res, next) => {
  try {
    const connection = await database.makeConnection();
    await connection.getRepository(genreEntity).save(req.body);
    res.status(200).json({ message: "Genre added"  });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.editGenre = async(req, res, next) => {
  const id = req.params.id;
  const newGenreData = req.body;
  try {
    const connection = await database.makeConnection();
    await connection.getRepository(genreEntity).update(id, newGenreData);
    res.status(200).json({
      message: 'Genre updated'
    });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.deleteGenre = async(req, res, next) => {
  const id = req.params.id;
  try {
    const connection = await database.makeConnection();
    const tracks = connection.getRepository(track);
    const relatedTracks = await tracks.find({
      relations:["genre"], 
      where: {
      genre: {
        ID: id
      }
    }});
    await relatedTracks.forEach(async item => {
      const current = item;
      current.genre = null;
      await tracks.save(current);
    });

    await connection.getRepository(genreEntity).delete(id);
    res.status(200).json({ message: 'Genre deleted.' });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}