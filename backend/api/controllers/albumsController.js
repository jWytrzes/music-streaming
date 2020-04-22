const database = require("../../databaseConnection");
const album = require("../entities/albumEntity");

exports.getAllAlbums = async() => {
  const connection = await database.makeConnection();
  return connection.getRepository(album).find({relations: ["artist", "tracks"]});
}