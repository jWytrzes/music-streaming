const database = require("../../databaseConnection");
const track = require("../entities/trackEntity");

exports.getAllTracks = async() => {
  const connection = await database.makeConnection();
  return connection.getRepository(track).find({relations: ["genre", "artist", "album", "playlists"]});
}