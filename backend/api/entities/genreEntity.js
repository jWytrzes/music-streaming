const typeorm = require("typeorm");

const genreSchema = typeorm.EntitySchema({
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
    //song?
    track: {
      target: "track",
      type: "one-to-many",
      inverseSide: "genre",
    }
  }
})

module.exports = {
  genreSchema
}