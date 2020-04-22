const database = require("../../databaseConnection");
const artist = require("../entities/artistEntity");

exports.getAllArtists = async() => {
  const connection = await database.makeConnection();
  return connection.getRepository(artist).find({relations: ["albums", "tracks"]});
}