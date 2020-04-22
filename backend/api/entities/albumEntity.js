const typeorm = require("typeorm");

const EntitySchema = typeorm.EntitySchema({
  name: "album",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    description: {
      type: "varchar"
    },
    name: {
      type: "varchar"
    },
    release_date: {
      type: "date"
    }
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