const typeorm = require("typeorm");

const albumSchema = new typeorm.EntitySchema({
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
      type: "date",
      nullable: true
    },
    description: {
      type: "varchar",
      nullable: true
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
      type: "one-to-many",
      inverseSide: "album",
    }
  }
})

module.exports = albumSchema