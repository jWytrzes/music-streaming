const typeorm = require("typeorm");

const genreSchema = new typeorm.EntitySchema({
  name: "genre",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar"
    },
  },
  relations: {
    tracks: {
      target: "track",
      type: "one-to-many",
      inverseSide: "genre",
    }
  }
})

module.exports = genreSchema;