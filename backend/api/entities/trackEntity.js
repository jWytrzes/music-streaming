const typeorm = require("typeorm");

const trackSchema = new typeorm.EntitySchema({
  name: "track",
  columns: {
    ID: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar"
    },
    duration: {
      type: "int"
    }
  },
  relations: {
    // album: {
    //   target: "album",
    //   type: "one-to-one",
    //   inverseSide: "album"
    // }
    genre: {
      target: "genre",
      type: "many-to-one",
      inverseSide: "tracks",
      cascade: true
    },
    // playlists: {
    //   target: "playlist",
    //   type: "many-to-many",
    //   inverseSide: "tracks",
    //   joinTable: true,
    // }
  }
})

module.exports = trackSchema;