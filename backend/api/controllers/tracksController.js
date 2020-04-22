const typeorm = require("typeorm");
const database = require("../../databaseConnection");
const track = require("../entities/trackEntity");

exports.getAllTracks = async() => {
  const connection = await database.makeConnection();
  console.log(track);
  return connection.getRepository("track").find({relations: ["genre"]});
}