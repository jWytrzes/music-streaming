const database = require("../../databaseConnection");
const genre = require("../entities/genreEntity");
const track = require("../entities/trackEntity");

exports.getAllGenres = async (req, res, next) => {
  try {
    const connection = await database.makeConnection();
    const genres = await connection.getRepository(genre).find({relations: ["tracks"]})
    res.status(200).json({ genres: genres  });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}

exports.addGenre = async(req, res, next) => {
  const newGenre = {
    name: req.body.name
  }

  try {
    const connection = await database.makeConnection();
    await connection.getRepository(genre).save(newGenre);
    res.status(200).json({ newGenre  });
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
    await connection.getRepository(genre).update(id, newGenreData);
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
    //const relatedTracks = await connection.getRepository(track).find({genre.ID: id})
    await connection.getRepository(genre).delete(id);
    res.status(200).json({ message: 'Genre deleted.' });
  }
  catch(error) {
    res.status(error.status || 500).json({
      message: error.message
    })
  }
}