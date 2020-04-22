const database = require("../../databaseConnection");
const playlist = require("../entities/playlistEntity");

exports.getAllPlaylists = async() => {
  const connection = await database.makeConnection();
  return connection.getRepository(playlist).find({relations: ["user", "tracks"]});
}