const typeorm = require("typeorm");

const EntitySchema = new typeorm.EntitySchema({
  name: "album",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar"
    },
    release_date: {
      type: "date"
    },
    description: {
      type: "varchar"
    },
  },
  relations: {
    artist: {
      target: "artist",
      type: "many-to-one",
      inverseSide: "albums",
    },
    tracks: {
      target: "track",
      type: "many-to-one",
      inverseSide: "album"
    }
  }
})

module.exports = {
  EntitySchema
}