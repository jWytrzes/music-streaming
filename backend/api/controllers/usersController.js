const database = require("../../databaseConnection");
const user = require("../entities/userEntity");

exports.getAllUsers = async() => {
  const connection = await database.makeConnection();
  return connection.getRepository(user).find({relations: ["playlists"]});
}