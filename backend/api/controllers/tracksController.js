const typeorm = require("typeorm");
const app = require("../../app");

app.connect();

const getAllTracks = async() => {
  const connection = await app.connect();
  return connection.getRepository("track").find({
    relations: ["genre"]
  });
}

module.exports = {
  getAllTracks
}